package com.funckey.flash;

import android.content.pm.PackageManager;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class FlashModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;
    @NonNull
    @Override
    public String getName() {
        return "Flash";
    }

    public FlashModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }



    @ReactMethod
    public void hasFlash(Callback successCallback, Callback errorCallback) {
        if (reactContext.getApplicationContext().getPackageManager().hasSystemFeature(PackageManager.FEATURE_CAMERA_FLASH)) {
            successCallback.invoke();
        }
        else {
            errorCallback.invoke();
        }
    }


}
