export function init(options) {
    let tableConfig = {
        column: [],
        align: "left",
    };

    let initTableConfig = () => {
        for (let key in options) {
            if (tableConfig[key]) {
                tableConfig[key] = options[key]
            }
        }
    }
    return {
        tableConfig, initTableConfig
    }
}