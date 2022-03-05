<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>bntools/${SITE_NAME}${self.title()}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
        />
        <link href="${BASE_URL}/style.css" rel="stylesheet" />
        <style id="lang-style">
        [lang]:not([data-lang-ignore]) {
            display: none;
        }
        </style>
    </head>
    <body>
        <ul id="lang-selector" class="nav nav-pills border-start border-top position-fixed bottom-0 end-0 bg-body rounded p-1" style="z-index:1030">
            % for l10n in L10NS:
            <li class="nav-item">
                <a href="?${l10n.locales[0]}" class="nav-link" data-lang-ignore lang="${l10n.locales[0]}" onclick="setLanguage('${l10n.locales[0]}'); return false">
                    ${l10n.format_value("lang-self")}
                </a>
            </li>
            % endfor
        </ul>
        <script>
        const LANGUAGES = [
            % for l10n in L10NS:
            "${l10n.locales[0] | u}",
            % endfor
        ];

        function setLanguage(lang) {
            document.getElementById("lang-style").textContent = "[lang]:not([lang=" + lang + "]):not([data-lang-ignore]) { display: none; }";
            document.documentElement.lang = lang;
            window.localStorage.setItem("chiplibrary/lang", lang);
            const navItems = document.getElementById('lang-selector').querySelectorAll('.nav-link');
            for (let i = 0; i < navItems.length; ++i) {
                navItems[i].classList.remove('active');
                if (navItems[i].lang == lang) {
                    navItems[i].classList.add('active');
                }
            }
        }

        setLanguage((() => {
            let currentLanguage = null;

            // 1. Check querystring language.
            if (!currentLanguage) {
                currentLanguage = window.location.search.substring(1);
            }

            // 2. Check remembered language.
            if (!currentLanguage) {
                currentLanguage = window.localStorage.getItem("chiplibrary/lang");
            }

            // 3. Check navigator language.
            if (!currentLanguage) {
                currentLanguage = navigator.language.split(/-/)[0];
            }

            currentLanguage = currentLanguage || LANGUAGES[0];
            if (LANGUAGES.indexOf(currentLanguage) == -1) {
                currentLanguage = LANGUAGES[0];
            }
            return currentLanguage;
        })());
        </script>
        <div class="pb-5">
            ${self.body()}
        </div>
    </body>
</html>
