import markupsafe


def nl2br(t):
    return t.replace("\n", markupsafe.Markup("<br>"))
