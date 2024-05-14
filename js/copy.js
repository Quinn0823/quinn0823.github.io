var clipboard = new ClipboardJS('.copy_text');

clipboard.on('success', function(e) {
    alert("\"" + e.text + "\" has been copied.");

    // console.info('Action:', e.action);
    // console.info('Text:', e.text);
    // console.info('Trigger:', e.trigger);

    // e.clearSelection();
});

clipboard.on('error', function(e) {
    // console.error('Action:', e.action);
    // console.error('Trigger:', e.trigger);
});