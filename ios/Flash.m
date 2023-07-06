#import <AVFoundation/AVFoundation.h>
#import "Flash.h"
@implementation Flash
RCT_EXPORT_MODULE()
+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

// Check the device for flash capabilities and return callback of success // or fail
RCT_EXPORT_METHOD(hasFlash:(RCTResponseSenderBlock)successCallback errorCallback:(RCTResponseSenderBlock)errorCallback)
{
    AVCaptureDevice *device = [AVCaptureDevice defaultDeviceWithMediaType:AVMediaTypeVideo];
    if ([device hasTorch] && [device hasFlash]) {
        successCallback(@[]);
    }
    else {
        errorCallback(@[]);
    }
}
@end
