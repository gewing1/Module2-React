import {CAMPSITES} from '../../app/shared/CAMPSITES'

export const selectAllCampsites = () => {
    return CAMPSITES;
};

export const selectCampsiteById = (id) => {
    return (
        CAMPSITES.find((campsite) => campsite.id === parseInt(id))
    );
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
};

// Previously used code which selects a random campsite:
// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(Math.random()*CAMPSITES.length)]
// }