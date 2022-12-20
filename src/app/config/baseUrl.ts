import { isDevMode } from '@angular/core'

export function getBaseUrl(): string {
    if (isDevMode()) {
        return "https://localhost:7033/api/";
    } else {
        return "https://literate-tribble-api.herokuapp.com/api/";
    }
}