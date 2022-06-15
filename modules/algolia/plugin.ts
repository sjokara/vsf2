import { integrationPlugin } from "~/helpers/integrationPlugin";


export default integrationPlugin((plugin, options) => {
  plugin.integration.configure('algolia', {
    ...options,
    app: plugin.app
  });
});
