This e-commerce site that sells and displays traditional ethiopian clothing was built with [**Remix.js**](https://remix.run), [**React**](https://react.dev), [**TypeScript**](https://www.typescriptlang.org), [**Chakra UI**](https://chakra-ui.com), and [**Tailwind CSS**](https://tailwindcss.com) connected to a Django server [**(Github Repo)**](https://github.com/GDA-dev/GDAserver) for a small business run by a tailor named Genet Bekele.

# Home Page

Scrolling on the home page will preform a smooth animation from one section to the next section depending on the direction of the scroll. 

Video

[**Code**](https://github.com/GDA-dev/GDAclient/blob/main/app/containers/home.tsx)

Hovering over different header items has a background that smoothly follows where the user's mouse is hovering over.

Video

[**Code**](https://github.com/GDA-dev/GDAclient/blob/main/app/global/header.tsx)

# Clothing Pages

Clicking on the heart icon on a card adds that clothing piece to the user's wishlist, which is stored in the browser's local host. Clicking the heart icon on the header opens up the wishlist modal where you can go to view those clothing items or delete the clothing item from the wishlist. Clicking on a red heart will also remove from the wishlist.

Video

### Clothing By ID Page

Using the View Transition API [**(Docs)**](https://developer.chrome.com/docs/web-platform/view-transitions), selecting a card takes you to the id page and preforms a smooth animation where the image from the card transitions into the image on the id page. 

Video

[**Clothing Card Code**](https://github.com/GDA-dev/GDAclient/blob/main/app/components/clothingCard.tsx) and [**ID Page Code**](https://github.com/GDA-dev/GDAclient/blob/main/app/components/individualClothing.tsx)

### Filters

Using GraphQL, clicking on an option in the filter dropdowns shows the clothes based on the filters and multiple to all filters can be selected at once. Filter options that don't currently exist on the clothes are greyed out to prevent showing a blank page.

Video

[**Filter Bar Code**](https://github.com/GDA-dev/GDAclient/blob/main/app/components/filterBar.tsx) and one of the categories' components [**code**](https://github.com/GDA-dev/GDAclient/blob/main/app/components/categoryFilter.tsx).

See [**Server Github Repo**](https://github.com/GDA-dev/GDAserver) for GraphQL explanation.

# Admin Portal

Following [**Remix's Modular Design**](https://remix.run/docs/en/main/discussion/routes#modular-design) to take advantage of Remix's child route rendering style, the admin portal has authentication and a smooth experience for the website's admin. 

Video

[**Code**](https://github.com/GDA-dev/GDAclient/tree/main/app/admin)

# Notes

To use this project locally, run `npm run dev`.

Built by Genet Bekele's nephew [Michael Girma](https://github.com/michaelgirma) and his friends.