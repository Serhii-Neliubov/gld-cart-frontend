import {Suspense} from "react";
import {Provider} from "react-redux";
import {Toaster} from "react-hot-toast";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import "./i18n.ts";

import Navigation from "./navigation/Navigation.tsx";
import {store} from "@store/store.ts";

const queryClient = new QueryClient();
// "https://test-gld-backend-a01fa3463a0e.herokuapp.com"

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<div>Loading...</div>}>
                <Provider store={store}>
                    <Navigation />
                    <Toaster position="top-center" reverseOrder={false} />
                </Provider>
            </Suspense>
        </QueryClientProvider>
    );
};

export default App;