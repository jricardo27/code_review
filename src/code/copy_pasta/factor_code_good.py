# GOOD
def color_text(text, color):
    """Apply the given color to the text."""

    return '<{color}>{text}<{color}>'.format(
        color=color,
        text=text,
    )

def color_text_in_green(text):
    """Color text in green."""

    return color_text(text, 'green')

def color_text_in_blue(text):
    """Color text in blue."""

    return color_text(text, 'blue')

print(color_text_in_green('Grass'))
print(color_text_in_blue('Sea'))


