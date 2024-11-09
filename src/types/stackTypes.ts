export type HomeStackParamList = {
    Dashboard: undefined;
    CountryByCurrency: undefined;
    RegionsByCountry: { code: string, name: string };
    CitiesByRegion: { code: string, name: string, countryCode: string };
    CustomCountryList: undefined;
    GeneralInfo: undefined;
    Coordinates: undefined;
    Population: undefined;
    Summary: undefined;
};

export type MainStackParamList = {
    Login: undefined;
    Register: undefined;
    HomeStack: undefined;
};
