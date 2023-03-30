let LANG;

function initLangSelector(languages) {
    function createLangStyle() {
        const style = document.createElement("style");
        style.textContent = "[lang][data-localize] { display: none; }";
        return style;
    }

    function createLangSelector(languages) {
        const ul = document.createElement("ul");

        ul.className =
            "nav nav-pills border-start border-top position-fixed bottom-0 end-0 bg-body rounded p-1";
        ul.style.zIndex = 1030;
        for (const lang of languages) {
            const li = document.createElement("li");
            ul.appendChild(li);

            li.className = "nav-item";

            const a = document.createElement("a");
            li.appendChild(a);

            a.className = "nav-link";
            a.lang = lang.code;
            a.href = "?lang=" + lang.code;
            a.onclick = (e) => {
                e.preventDefault();
                setLanguage(lang.code);
            };
            a.textContent = lang.name;
        }
        return ul;
    }

    const langStyle = createLangStyle();
    document.head.appendChild(langStyle);

    const langSelector = createLangSelector(languages);
    document.body.appendChild(langSelector);

    function setLanguage(lang) {
        LANG = lang;
        langStyle.textContent =
            "[lang][data-localize]:not([lang=" + lang + "]) { display: none; }";
        document.documentElement.lang = lang;
        window.localStorage.setItem("lang", lang);
        const navItems = langSelector.querySelectorAll(".nav-link");
        for (let i = 0; i < navItems.length; ++i) {
            navItems[i].classList.remove("active");
            if (navItems[i].lang == lang) {
                navItems[i].classList.add("active");
            }
        }
    }

    setLanguage(
        (() => {
            let currentLanguage = null;

            // 1. Check querystring language.
            if (!currentLanguage) {
                currentLanguage = new URLSearchParams(
                    window.location.search
                ).get("lang");
            }

            // 2. Check remembered language.
            if (!currentLanguage) {
                currentLanguage = window.localStorage.getItem("lang");
            }

            // 3. Check navigator language.
            if (!currentLanguage) {
                currentLanguage = navigator.language.split(/-/)[0];
            }

            currentLanguage = currentLanguage || languages[0].code;
            if (languages.findIndex((l) => l.code == currentLanguage) == -1) {
                currentLanguage = languages[0].code;
            }

            return currentLanguage;
        })()
    );
}

initLangSelector([
    { code: "en", name: "en" },
    { code: "ja", name: "日本語" },
]);
