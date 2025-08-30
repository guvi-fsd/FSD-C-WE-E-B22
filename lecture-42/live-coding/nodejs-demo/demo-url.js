import { URL } from "node:url";

// https://nodejs.org/api/url.html

const url = new URL("https://docs.google.com/spreadsheets/d/1ZnIowkrmncWn88QGXTE0VEWZoe6OsASAh2O4RJJvSUE/edit?gid=0#gid=0");
console.log(url.hostname);
console.log(url.searchParams);
console.log(url.searchParams.get("gid"));
console.log(url.protocol);
