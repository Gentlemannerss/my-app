import('./index.js')
    .then(() => console.log('index.js loaded'))
    .catch(e => {
        console.log('Error loading index.js', e.message);
        console.error(e.stack);
    });