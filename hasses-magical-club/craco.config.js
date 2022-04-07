const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { "@primary-color": "#3f492b",
                            "@layout-header-background":"#3f492b",
                            "@layout-header-padding": "0 0px",
                            "@layout-header-height": "50px",
                            "@background-color-light":"#3f492b",
                            "@link-color": "#1DA57A",
                            "@border-radius-base": "10px",
                            "@body-background": "#fff",
                            "@padding-md": "16px",
                            "@btn-padding-horizontal-lg":"10px",
                            "@btn-default-border":"#f59908",
                            "@btn-primary-border":"#f59908",
                            "@btn-border-style":"solid",
                            "@btn-border-width":"4px"
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
        
    ],
};