<%inherit file="/_base.html.mako" />
<%namespace name="chipstable" file="/[game]/_chipstable.mako" />
<%def name="title()">/${game_id}/by-code</%def>

<div class="container mt-3">
    <h1><a href="/">bntools</a>/<a href="${BASE_URL}">${SITE_NAME}</a>/<a href="${BASE_URL}/${game_id}">${game_id}</a>/by-code</h1>
    <p class="lead">
    % for l10n in L10NS:
        <span lang="${l10n.locales[0]}">${l10n.format_value("chips-by-code-title", {"game_name": META["name"][l10n.locales[0]]})}</span>
    % endfor
    </p>
    <%
    sorted_chips_by_code = sorted(chips_by_code.items(), key=lambda c: CODE_ORDER.index(c[0]))
    %>
    <ul class="nav mb-3">
    % for code in CODE_ORDER:
        <li class="nav-item">
        % if code in chips_by_code:
            <a class="nav-link" href="#${code}">${code}</a>
        % else:
            <a class="nav-link disabled">${code}</a>
        % endif
        </li>
    % endfor
    </ul>
</div>
<div class="container-fluid my-3">
    <hr>
    % for code, chips in sorted_chips_by_code:
    <div class="d-flex align-items-center mb-2">
        <h2 id="${code}">${code}</h2>
        <a class="ms-auto d-block" href="#">
            % for l10n in L10NS:
            <span lang="${l10n.locales[0]}">${l10n.format_value("back-to-top")}</span>
            % endfor
        </a>
    </div>
    ${chipstable.chipstable(chips, code)}
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
