# BAD
def color_text_in_green(text):
    """Color text in green."""

    return '<{color}>{text}<{color}>'.format(
        color='green',
        text=text,
    )

def color_text_in_blue(text):
    """Color text in blue."""

    return '<{color}>{text}<{color}>'.format(
        color='blue',
        text=text,
    )

print(color_text_in_green('Grass'))
print(color_text_in_blue('Sea'))


