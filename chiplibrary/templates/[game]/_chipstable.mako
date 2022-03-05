<%def name="chipstable(chips, selected_code=None)">
    <div class="row row-cols-auto g-1">
        % for chip in chips:
        <div class="col">
            <div class="card chip h-100 chip-class-${chip["class"]}" style="width: 192px" id="${CHIP_PREFIXES[chip["section"]]}${chip["index"]}${chip["version"] or ""}${"-" + selected_code if selected_code is not None else ""}">
                % for l10n in L10NS:
                <img lang="${l10n.locales[0]}" src="${BASE_URL}/images/${game_id}/chips/${CHIP_PREFIXES[chip["section"]]}${chip["index"]}${chip["version"] or ""}.png" alt="${chip["name"][l10n.locales[0]]}" title="${chip["name"][l10n.locales[0]]}" class="card-image-top" />
                % endfor
                <div class="card-body">
                    <h3 class="card-title h6">
                        <small><a href="${BASE_URL}/${game_id}/#${CHIP_PREFIXES[chip["section"]]}${chip["index"]}${chip["version"] or ""}" class="text-muted text-decoration-none">
                            ${CHIP_PREFIXES[chip["section"]].upper()}${chip["index"]}
                            % for l10n in L10NS:
                            <span lang="${l10n.locales[0]}">${versions[chip["version"]]["shortName"][l10n.locales[0]] if chip["version"] is not None else ""}</span>
                            % endfor
                        </a></small><br>
                        % for l10n in L10NS:
                        <span lang="${l10n.locales[0]}">
                            <img src="${BASE_URL}/images/${game_id}/chipicons/${CHIP_PREFIXES[chip["section"]]}${chip["index"]}${chip["version"] or ""}.png" alt="${chip["name"][l10n.locales[0]]}" title="${chip["name"][l10n.locales[0]]}" width="28" height="28" />
                            <span class="chip-name">
                                ${chip["name"][l10n.locales[0]]}
                            </span>
                        </span>
                        % endfor
                    </h3>
                    % if chip["element"] is not None:
                    <div class="row mb-2 align-items-center">
                        <div class="col">
                            <a href="${BASE_URL}/${game_id}/by-element/#${chip["element"]}"><!--
                            % for l10n in L10NS:
                            --><img lang="${l10n.locales[0]}" src="${BASE_URL}/images/${game_id}/elements/${chip["element"]}.png" alt="${l10n.format_value("chip-element-" + chip["element"])}" title="${l10n.format_value("chip-element-" + chip["element"])}" width="28" height="28" /><!--
                            % endfor
                            --></a>
                            <span class="align-middle fw-bold">
                                % if chip["damage"]:
                                ${chip["damage"]}
                                % else:
                                <wbr>
                                % endif
                            </span>
                        </div>
                        % if "mb" in chip and chip["mb"] is not None:
                            <div class="col-auto ms-auto text-muted">${chip["mb"]}MB</div>
                        % endif
                    </div>
                    % endif
                    <div class="row g-1 mb-2">
                    % for code in chip["codes"]:
                        <div class="col-auto">
                            <a href="${BASE_URL}/${game_id}/by-code/#${code}"><span class="badge ${"bg-primary" if code == selected_code else "bg-light text-primary"} p-1" style="font-size: 1.1rem; width: 1.5rem">${code}</span></a>
                        </div>
                    % endfor
                    </div>
                    <p class="card-text" style="font-size: 0.85em">
                        % for l10n in L10NS:
                        <span lang="${l10n.locales[0]}">${chip["description"][l10n.locales[0]] | nl2br}</span>
                        % endfor
                    </p>
                </div>
            </div>
        </div>
        % endfor
    </div>
</%def>
