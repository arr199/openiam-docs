export interface Page {
  name: string;
  items: Item[];
  label: string;
  path: string;
}

interface Item {
  label: string;
  link: string;
  imageUrl?: string;
}

export interface Pages {
  home: Page;
  gettingStarted: Page;
  examples: Page;
}

export const pages: Pages = {
  home: {
    name: "introduction",
    label: "Introduction",
    path: "/",
    items: [{ label: "What is OpenIAM", link: "/" }],
  },
  gettingStarted: {
    name: "getting-started",
    label: "Getting Started",
    path: "/getting-started",
    items: [
      {
        label: "Login into the Administration Console",
        link: "/getting-started/login-into-the-administration-console",
      },
      { label: "Searching users", link: "/getting-started/searching-users" },
      {
        label: "Modifying existing users information",
        link: "/getting-started/modifying-existing-users-information",
      },
      { label: "Creating a User", link: "/getting-started/creating-a-user" },
      {
        label: "Reviewing user activity log",
        link: "/getting-started/reviewing-user-activity-log",
      },
    ],
  },
  examples: {
    name: "example",
    label: "Common User Errors",
    path: "/examples",
    items: [
      {
        label: "Cannot read property 'authToken' of null",
        link: "/examples/cannot-read-property-authToken-of-null",
        imageUrl: "/error_images/Cannot read property 'authToken' of null.jpeg",
      },

      {
        label: "Unable to SSO to this application as you do not have access",
        link: "/examples/unable-to-SSO-to-this-application-as-you-do-not-have-access",
        imageUrl:
          "/error_images/unable-to-SSO-to-this-application-as-you-do-not-have-access.png",
      },
    ],
  },
};
