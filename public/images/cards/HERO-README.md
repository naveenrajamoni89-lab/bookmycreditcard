# Hero card images

Edit `src/data/heroCards.json` to change the six cards. Each entry has:

- `file`: image filename in this folder (add your image here first).
- `name`: accessible label for the clickable card.
- `route`: the card's detail page path, such as `/sbi-bank/sbi-miles-prime-credit-card`.
- `zoom`: image crop; use `1` for a tightly cropped image.
- `landscape`: set to `true` when the image needs a 90° turn.

Entries display left to right. The third card rises first and stays in front
during the spread. Keep six entries to preserve the fan layout. Refresh the
page after changing the JSON or images.
