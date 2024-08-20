import {useRecoilState} from 'recoil';
import {useEffect, useState} from 'react';
import communityState from '@/recoil/community/community.recoil';
import {getPostsByKeyword} from '@/api/community/post.api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import navigationState from '@/recoil/navigation/navigation.recoil';

export const useSearchHook = () => {
  const [navStateValue, setNav] = useRecoilState(navigationState);

  const updateSearchKeyword = (value: string) => {
    setNav(prevState => ({
      ...prevState,
      searchKeyword: value,
    }));
  };

  const setShowResultsScreen = (value: boolean) => {
    return setNav(prevState => ({
      ...prevState,
      showResultsScreen: value,
    }));
  };

  useEffect(() => {
    const getRecentSearch = async () => {
      const recentSearches =
        (await AsyncStorage.getItem('recentSearches')) || '';
      const seraches = recentSearches ? JSON.parse(recentSearches) : [];
      setNav(prevState => ({
        ...prevState,
        recentSearches: seraches,
      }));
      return seraches;
    };
    getRecentSearch();
  }, []);

  const saveRecentSearch = async (keyword: string) => {
    const trimmedKeyword = keyword.trim();
    if (!trimmedKeyword) {
      return;
    }
    const recentSearches = (await AsyncStorage.getItem('recentSearches')) || '';
    const seraches = recentSearches ? JSON.parse(recentSearches) : [];

    const updatedSearches = [
      ...seraches.filter((item: string) => item !== keyword && keyword !== ''),
      keyword,
    ];
    await AsyncStorage.setItem(
      'recentSearches',
      JSON.stringify(updatedSearches),
    );

    setNav(prevState => ({
      ...prevState,
      recentSearches: updatedSearches,
    }));
  };

  const removeRecentSearch = async () => {
    await AsyncStorage.removeItem('recentSearches');
    setNav(prevState => ({
      ...prevState,
      recentSearches: [''],
    }));
  };

  const setNavLocation = (value: string) => {
    setNav(prevState => ({
      ...prevState,
      navCurrentLocation: value,
    }));
  };

  return {
    updateSearchKeyword,
    setShowResultsScreen,
    saveRecentSearch,
    removeRecentSearch,
    setNavLocation,
  };
};
