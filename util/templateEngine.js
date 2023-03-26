import fs from "fs";

export default function renderPage(pagePath, tabTitle) {
    const header = fs.readFileSync("./public/components/header.html").toString()
        .replace("$TAB_TITLE", tabTitle);
    const footer = fs.readFileSync("./public/components/footer.html").toString();
    const page = fs.readFileSync(pagePath).toString();
    const sidemenu = fs.readFileSync("./public/components/sideMenu.html")

    return header + sidemenu + page + footer
};