<%inherit file="/_base.html.mako" />
<%def name="title()"></%def>

<div class="container my-3">
    <h1><a href="/">bntools</a>/${SITE_NAME}</h1>
    <p class="lead">
    % for l10n in L10NS:
        <span lang="${l10n.locales[0]}">${l10n.format_value("home-description") | n}</span>
    % endfor
    </p>
    <ul>
    % for game_id in games:
        <li>
            % for l10n in L10NS:
            <span lang="${l10n.locales[0]}">${l10n.format_value("home-game-entry", {
                "game_name": metas[game_id]["name"][l10n.locales[0]],
                "url": BASE_URL + "/" + game_id + "/",
                "by_code_url": BASE_URL + "/" + game_id + "/by-code/",
                "by_element_url": BASE_URL + "/" + game_id + "/by-element/",
            }) | n}</span>
            % endfor
        </li>
    % endfor
    </ul>
    <p>
        % for l10n in L10NS:
        <span lang="${l10n.locales[0]}">${l10n.format_value("home-bugtracker-info") | n}</span>
        % endfor
    </p>
    <h2>
    % for l10n in L10NS:
        <span lang="${l10n.locales[0]}">${l10n.format_value("home-credits-title")}</span>
    % endfor
    </h2>
    <p>
        % for l10n in L10NS:
        <div lang="${l10n.locales[0]}">${l10n.format_value("home-credits-body") | n}</div>
        % endfor
    </p>
</div>
