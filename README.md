# Clock IO

**Technologie stack**
* React
* Typescript
* Styled Component

## Features
**Settings**
* Set maximum distance in KM from office where user can clock in
* Configure office geolocation
* Settings are save in the local storage

**Home**
* **Localization**
    * FR and EN
    * use the broswer language by default (if it's FR or EN), failback language is EN
    * localization is also saved in the local storage
* **GPS**
    * activate gelocation
    * detect if user is in the clock in range
    * if not, display distance in Km
    * position is stored in the Store, but if the user refresh the page, he/she needs to activate GPS again

 * **Clock In/Clock Out**
    * Log date, time and address
    * address is retrieved by fetch API with position as parameter.
    * data are saved in the local storage

## Remarks
I mainly focused on coding the logical part of the App and didn't have enough time to do a proper styling, many elements are not styled..
If I had more time I would:
* focus on the styling (basic styling of all elements, add dynamic behaviour to the clock in/out button, make the app responsive...
* do unit testing
* refactor and clean the code

### bugs
The bugs i found but didn't have time to fix are the following one.
* format of the latitude and longitude may sometimes be wrong.
* if browser geolocation is disabled, an error message is displayed. But the message doesn't disappear.
* missing labels in Settings Page.
* I didn't use react-router in order to save time, instead I just used conditional rendering. The drawback is that if the user is on the Setting Page and refresh the Page, it goes back to Home Page.

### Misc
I think there was some error regarding the assets given in the PDF.
* Swingvy latitude and longitude are interchanged.
* the API path should be https://api.mapbox.com/geocoding/v5/mapbox.places/${Longitude},${Latitude}.json?access_token=${access_token}



## Installation

Use the package manager yarn to install the app

```bash
yarn
```

## Run

```bash
yarn start
```
