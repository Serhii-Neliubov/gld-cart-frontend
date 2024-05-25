import {
    Chat, ContactUs,
    CookiePolicy,
    DriverLicense,
    Faqs, ForgottenPassword,
    HelpAndSupport,
    Home, Login, PaymentCardForm,
    PaymentCheckout,
    PrivacyPolicy,
    Product,
    ProductCategories,
    ProductsList,
    ProfessionalCategories,
    ProfessionalService,
    ProfessionalServices,
    Profile, Register,
    RentingCategories,
    RentingProducts,
    ShippingPolicy,
    ShoppingCart,
    SupportChat,
    TermsConditions,
    TrackOrder,
    Wishlist
} from "@pages/index.ts";

export interface RouteElement {
    path: string;
    element: any;
    isAuthRequired: boolean;
    userRole?: string[];
}

export const routes: RouteElement[] = [
    {
        path: "/",
        element: Home,
        isAuthRequired: false,
    },
    {
        path: "/privacy-policy",
        element: PrivacyPolicy,
        isAuthRequired: false,
    },
    {
        path: "/cookie-policy",
        element: CookiePolicy,
        isAuthRequired: false,
    },
    {
        path: "/shipping-policy",
        element: ShippingPolicy,
        isAuthRequired: false,
    },
    {
        path: "/terms-and-conditions",
        element: TermsConditions,
        isAuthRequired: false,
    },
    {
        path: "/faq-s",
        element: Faqs,
        isAuthRequired: false,
    },
    {
        path: "/contact-us",
        element: ContactUs,
        isAuthRequired: false,
    },
    {
        path: "/login",
        element: Login,
        isAuthRequired: false,
    },
    {
        path: "/register",
        element: Register,
        isAuthRequired: false,
    },
    {
        path: "/forgotten-password",
        element: ForgottenPassword,
        isAuthRequired: false,
    },

    // Both
    {
        path: "/support-chat",
        element: SupportChat,
        isAuthRequired: true,
        userRole: ["buyer", "vendor"],
    },
    {
        path: "/profile",
        element: Profile,
        isAuthRequired: true,
        userRole: ["buyer", "vendor"],
    },
    {
        path: "/help-and-support",
        element: HelpAndSupport,
        isAuthRequired: true,
        userRole: ["buyer", "vendor"],
    },

    // Buyer
    {
        path: "/chat",
        element: Chat,
        isAuthRequired: true,
        userRole: ["buyer"],
    },
    {
        path: "/chat/*",
        element: Chat,
        isAuthRequired: true,
        userRole: ["buyer"],
    },
    {
        path: "/checkout-payment",
        element: PaymentCheckout,
        isAuthRequired: true,
        userRole: ["buyer"],
    },
    {
        path: "/driver-license",
        element: DriverLicense,
        isAuthRequired: true,
        userRole: ["buyer"],
    },
    {
        path: "/track-an-order",
        element: TrackOrder,
        isAuthRequired: true,
        userRole: ["buyer"],
    },
    {
        path: "/renting",
        element: RentingCategories,
        isAuthRequired: true,
        userRole: ["buyer"],
    },
    {
        path: "/products",
        element: ProductCategories,
        isAuthRequired: true,
        userRole: ["buyer"],
    },
    {
        path: "/products/:category",
        element: ProductsList,
        isAuthRequired: true,
        userRole: ["buyer"],
    },
    {
        path: "/product-page/:id",
        element: Product,
        isAuthRequired: true,
        userRole: ["buyer"],
    },
    {
        path: "/professional-services",
        element: ProfessionalCategories,
        isAuthRequired: true,
        userRole: ["buyer"],
    },
    {
        path: "/professional-services/:category",
        element: ProfessionalServices,
        isAuthRequired: true,
        userRole: ["buyer"],
    },
    {
        path: "/professional-services/:category/:id",
        element: ProfessionalService,
        isAuthRequired: true,
        userRole: ["buyer"],
    },
    {
        path: "/renting",
        element: RentingCategories,
        isAuthRequired: true,
        userRole: ["buyer"],
    },
    {
        path: "/renting/:category",
        element: RentingProducts,
        isAuthRequired: true,
        userRole: ["buyer"],
    },
    {
        path: "/wishlist",
        element: Wishlist,
        isAuthRequired: true,
        userRole: ["buyer"],
    },
    {
        path: "/shopping-cart",
        element: ShoppingCart,
        isAuthRequired: true,
        userRole: ["buyer"],
    },
    {
        path: "/checkout-payment/order/:clientSecret/:name/:surname/:country/:street/:town/:zipcode/:phone/:email",
        element: PaymentCardForm,
        isAuthRequired: true,
        userRole: ["buyer"],
    },
]