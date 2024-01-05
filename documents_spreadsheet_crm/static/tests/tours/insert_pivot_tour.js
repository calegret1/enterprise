/** @odoo-module */

import "web.dom_ready";
import tour from "web_tour.tour";

tour.register(
    "insert_crm_pivot_in_spreadsheet",
    {
        test: true,
        url: "/web",
    },
    [
        {
            trigger: '.o_app[data-menu-xmlid="crm.crm_menu_root"]',
            content: "Open CRM app",
            run: "click",
        },
        {
            trigger: 'button[data-tooltip="Pivot"]',
            content: "Open Pivot view",
            run: "click",
        },
        {
            trigger: ".o_pivot_add_spreadsheet",
            content: "Insert pivot in the spreadsheet",
            run: "click",
        },
        {
            trigger: ".modal-footer .btn-primary",
            content: "Insert in a new spreadsheet",
            run: "click",
        },
        {
            trigger: ".o-spreadsheet",
            content: "Redirected to spreadsheet",
        },
    ]
);
