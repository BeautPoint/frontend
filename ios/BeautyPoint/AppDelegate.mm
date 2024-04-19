#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>

#import <RNKakaoLogins.h>

#import <NaverThirdPartyLogin/NaverThirdPartyLoginConnection.h>

#import <GoogleMaps/GoogleMaps.h>

#import "RNCConfig.h"

@implementation AppDelegate

 /**
frontend => BeautyPoint 로변경
*/

/** env googleMapsApiKey */

NSDictionary *config = [RNCConfig env];
NSString *googleMapsApiKey = [config objectForKey:@"GOOGLE_MAP_IOS"];
 
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
 [GMSServices provideAPIKey:googleMapsApiKey]; // add this line using the api key obtained from Google Console

  self.moduleName = @"BeautyPoint";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

/// This method controls whether the `concurrentRoot`feature of React18 is turned on or off.
///
/// @see: https://reactjs.org/blog/2022/03/29/react-v18.html
/// @note: This requires to be rendering on Fabric (i.e. on the New Architecture).
/// @return: `true` if the `concurrentRoot` feature is enabled. Otherwise, it returns `false`.
- (BOOL)concurrentRootEnabled
{
  return true;
}

- (BOOL)application:(UIApplication *)application
     openURL:(NSURL *)url
     options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
  
// naver
  if ([url.scheme isEqualToString:@"{{ naverlogin }}"]) {
    return [[NaverThirdPartyLoginConnection getSharedInstance] application:application openURL:url options:options];
  }
    
  //kakao
 if([RNKakaoLogins isKakaoTalkLoginUrl:url]) {
    return [RNKakaoLogins handleOpenUrl: url];
 }

 return NO;
 
}

@end


