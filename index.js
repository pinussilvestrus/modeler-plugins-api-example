import fetch from 'node-fetch';

const API = 'https://raw.githubusercontent.com/camunda/camunda-modeler-plugins/master/plugins.json';

print('Fetching plugins...')

fetch(API)
  .then(response => {
    response.json().then(pl => {
      const {
        version,
        plugins
      } = pl;

      print(`${plugins.length} plugin(s) fetched!`);
      print(`Registry version <${version}>`);
      print('Available plugins:');

      plugins.forEach(plugin => printPlugin(plugin));
    });
  })


// helpers ///////

function printPlugin(plugin) {
  const {
    displayName,
    url
  } = plugin;

  console.log(`   * ${displayName} (${url})`);
}

function print(message) {
  console.log('[Camunda Modeler Plugins]', message);
}