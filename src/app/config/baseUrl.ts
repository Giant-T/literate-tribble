import { isDevMode } from '@angular/core'

export function getBaseUrl(): string {
    if (isDevMode()) {
        return "https://localhost:7033/api/";
    } else {
        return "https://literateapi.azurewebsites.net/api/";
    }
}