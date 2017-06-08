# EVEN BETTER
GREEN = 'green'
BLUE = 'blue'

def color_text(text, color):
    """Apply the given color to the text."""

    return '<{color}>{text}<{color}>'.format(
        color=color,
        text=text,
    )

print(color_text('Grass', GREEN))
print(color_text('Sea', BLUE))

##############################
# Or

sentences = [
    ('Grass', GREEN),
    ('Sea', BLUE),
]

for sentence in sentences:
    print(color_text(*sentence))

##############################
# Or

def print_color_sentences(sentences):
    """
    Print a list of sentences

    Each item is a duple of text and color.
    """

    for sentence in sentences:
        print(color_text(*sentence))


print_color_sentences([
    ('Grass', GREEN),
    ('Sea', BLUE),
])
