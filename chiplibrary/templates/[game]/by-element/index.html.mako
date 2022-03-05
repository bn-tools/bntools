<%inherit file="/_base.html.mako" />
<%namespace name="chipstable" file="/[game]/_chipstable.mako" />
<%def name="title()">/${game_id}/by-element</%def>
<div class="container mt-3">
    <h1><a href="/">bntools</a>/<a href="${BASE_URL}">${SITE_NAME}</a>/<a href="${BASE_URL}/${game_id}">${game_id}</a>/by-element</h1>
    <p class="lead">
    % for l10n in L10NS:
        <span lang="${l10n.locales[0]}">${l10n.format_value("chips-by-element-title", {"game_name": META["name"][l10n.locales[0]]})}</span>
    % endfor
    </p>
    <%
    sorted_chips_by_element = sorted(chips_by_element.items(), key=lambda c: META["elements"].index(c[0]))
    %>
    <ul class="nav mb-3">
    % for element, _ in sorted_chips_by_element:
        <li class="nav-item">
            <a class="nav-link" href="#${element}">
                % for l10n in L10NS:
                <span lang="${l10n.locales[0]}"><img src="${BASE_URL}/images/${game_id}/elements/${element}.png" alt="${l10n.format_value("chip-element-" + element)}" title="${l10n.format_value("chip-element-" + element)}" width="28" height="28" /> ${l10n.format_value("chip-element-" + element)}</span>
                % endfor
            </a>
        </li>
    % endfor
    </ul>
</div>
<div class="container-fluid my-3">
    <hr>
    % for element, chips in sorted_chips_by_element:
    <div class="d-flex align-items-center mb-2">
        <h2 id="${element}">
            % for l10n in L10NS:
            <span lang="${l10n.locales[0]}"><img src="${BASE_URL}/images/${game_id}/elements/${element}.png" alt="${l10n.format_value("chip-element-" + element)}" title="${l10n.format_value("chip-element-" + element)}" width="28" height="28" /> ${l10n.format_value("chip-element-" + element)}</span>
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
        <a class="ms-auto d-block" href="#">
            % for l10n in L10NS:
            <span lang="${l10n.locales[0]}">${l10n.format_value("back-to-top")}</span>
            % endfor
        </a>
    </div>
</div>
