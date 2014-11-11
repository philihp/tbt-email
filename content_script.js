walk(document.body);

function walk(node)
{
	// I stole this from here:
	// http://goo.gl/41LAhG

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

  v = v.replace(/\b(E|e)mail/g, function(match, e, offset, string) {
    return e + "-mail";
  });

	textNode.nodeValue = v;
}


