<%inherit file="/_base.html.mako" />
<%namespace name="chipstable" file="/[game]/_chipstable.mako" />
<%def name="title()">/${game_id}</%def>

<div class="container mt-3">
    <h1><a href="/">bntools</a>/<a href="${BASE_URL}">${SITE_NAME}</a>/${game_id}</h1>
    <p class="lead">
    % for l10n in L10NS:
        <span lang="${l10n.locales[0]}">${l10n.format_value("chips-title", {"game_name": META["name"][l10n.locales[0]]})}</span>
    % endfor
    </p>
    <p>
    % for l10n in L10NS:
        <span lang="${l10n.locales[0]}">${l10n.format_value("game-view-by-hint", {
            "by_code_url": BASE_URL + "/" + game_id + "/by-code/",
            "by_element_url": BASE_URL + "/" + game_id + "/by-element/",
        }) | n}</span>
    % endfor
    </p>
    <%
    sorted_chips_by_section = sorted(chips_by_section.items(), key=lambda c: SECTION_ORDER.index(c[0]))
    %>
    <ul class="nav mb-3">
    % for section, _ in sorted_chips_by_section:
        <li class="nav-item">
            <a class="nav-link" href="#${section}">
                % for l10n in L10NS:
                <span lang="${l10n.locales[0]}">${l10n.format_value("chip-class-" + section)}</span>
                % endfor
            </a>
        </li>
    % endfor
        <li class="nav-item">
            <a class="nav-link" href="#pa">
                % for l10n in L10NS:
                <span lang="${l10n.locales[0]}">${l10n.format_value("chip-pa")}</span>
                % endfor
            </a>
        </li>
    </ul>
</div>
<div class="container-fluid my-3">
    <hr>
    % for section, chips in sorted_chips_by_section:
    <div class="d-flex align-items-center mb-2">
        <h2 id="${section}">
            % for l10n in L10NS:
            <span lang="${l10n.locales[0]}">${l10n.format_value("chip-class-" + section)}</span>
            % endfor
        </h2>
        <a class="ms-auto d-block" href="#">
            % for l10n in L10NS:
            <span lang="${l10n.locales[0]}">${l10n.format_value("back-to-top")}</span>
            % endfor
        </a>
    </div>
    ${chipstable.chipstable(chips)}
    <hr>
    % endfor
    <div class="d-flex">
        <h2 id="pa">
            % for l10n in L10NS:
            <span lang="${l10n.locales[0]}">${l10n.format_value("chip-pa")}</span>
            % endfor
        </h2>
        <a class="ms-auto d-block" href="#">
            % for l10n in L10NS:
            <span lang="${l10n.locales[0]}">${l10n.format_value("back-to-top")}</span>
            % endfor
        </a>
    </div>
    <div class="row row-cols-auto g-1">
    % for pa in pas:
        <div class="col">
            <div class="card chip pa h-100" style="width: 192px" id="pa${pa["index"]}">
                <div class="card-body">
                    <h3 class="card-title h6">
                        <small><a href="${BASE_URL}/${game_id}/#pa${pa["index"]}" class="text-muted text-decoration-none">PA${pa["index"]}</a></small><br>
                        % for l10n in L10NS:
                        <span lang="${l10n.locales[0]}"><img src="${BASE_URL}/images/${game_id}/chipicons/pa.png" alt="${pa["name"][l10n.locales[0]]}" title="${pa["name"][l10n.locales[0]]}" width="28" height="28" /></span>
                        % endfor
                        <span class="chip-name">
                            % for l10n in L10NS:
                            <span lang="${l10n.locales[0]}">${pa["name"][l10n.locales[0]]}</span>
                            % endfor
                        </span>
                    </h3>
                    <div class="row mb-2 align-items-center">
                        <div class="col">
                            <span class="align-middle fw-bold">
                                % if pa["damage"]:
                                ${pa["damage"]}
                                % else:
                                <wbr>
                                % endif
                            </span>
                        </div>
                    </div>
                    <div class="pa-info row mb-2">
                    % for i, combo in enumerate(pa["pa"]):
                        <div class="pa-info-page">
                            <input type="radio" class="form-check-input pa-select" name="pa${pa["index"]}" value="${i}" ${"checked" if i == 0 else ""} style="left:${i * 1.5}em">
                            <ul class="list-unstyled mb-0 mt-4">
                            % for part in combo:
                                <% chip = all_chips[part["id"]] %>
                                <li>
                                    <a href="${BASE_URL}/${game_id}/#${CHIP_PREFIXES[chip["section"]]}${chip["index"]}${chip["version"] or ""}"><!--
                                        % for l10n in L10NS:
                                        --><span lang="${l10n.locales[0]}">${chip["name"][l10n.locales[0]]}</span><!--
                                        % endfor
                                    --></a>
                                    ${chip["codes"][part["variant"]]}
                                </li>
                            % endfor
                            </ul>
                        </div>
                    % endfor
                    </div>
                    <p class="card-text" style="font-size: 0.85em">
                        % for l10n in L10NS:
                        <span lang="${l10n.locales[0]}">${pa["description"][l10n.locales[0]] | nl2br}</span>
                        % endfor
                    </p>
                </div>
            </div>
        </div>
    % endfor
    </div>
    <hr>
    <div class="d-flex">
        <a class="ms-auto d-block" href="#">
            % for l10n in L10NS:
            <span lang="${l10n.locales[0]}">${l10n.format_value("back-to-top")}</span>
            % endfor
        </a>
    </div>
</div>
