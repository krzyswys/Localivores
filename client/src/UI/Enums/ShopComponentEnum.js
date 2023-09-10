import ProductsPage from "../../components/SingleShopPage/ProductsPage/ProductsPage";
import GalleryPage from "../../components/SingleShopPage/GalleryPage/GalleryPage";
import { ImageProvider } from "../../components/SingleShopPage/GalleryPage/ImageContext";
import ReviewsPage from "../../components/SingleShopPage/ReviewsPage/ReviewsPage";
import AboutShopPage from "../../components/SingleShopPage/AboutShopPage/AboutShopPage";


const ComponentEnum = {
    SHOP_PRODUCTS: 'shop-products',
    SHOP_REVIEWS: 'shop-reviews',
    SHOP_GALLERY: 'shop-gallery',
    ABOUT_SHOP: 'about-shop',
};

const componentMap = {
    [ComponentEnum.SHOP_PRODUCTS]: <ProductsPage />,
    [ComponentEnum.SHOP_REVIEWS]: <ReviewsPage />,
    [ComponentEnum.SHOP_GALLERY]: (
        <ImageProvider>
            <GalleryPage />
        </ImageProvider>
    ),
    [ComponentEnum.ABOUT_SHOP]: <AboutShopPage />,
};

export { ComponentEnum, componentMap };
