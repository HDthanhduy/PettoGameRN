package com.pettogamern;

import android.content.Context;
import android.graphics.Color;
import android.view.LayoutInflater;
import android.view.SurfaceView;

import com.facebook.react.common.MapBuilder;
import com.facebook.react.common.MapBuilder.Builder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

public class AndroidCustomViewManager extends SimpleViewManager<AndroidCustomView> {

    public static final String REACT_CLASS = "RNCSTMCamera";

    @Override
    public String getName() { return REACT_CLASS; }

    @Override
    public AndroidCustomView createViewInstance(ThemedReactContext context) {
        LayoutInflater inflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        AndroidCustomView view = (AndroidCustomView)inflater.inflate(R.layout.custom_view, null);

        SurfaceView surfaceView;
        surfaceView = (SurfaceView)view.findViewById(R.id.surface_view);
        surfaceView.setBackgroundColor(Color.GREEN);

        return view;
    }

    @ReactProp(name = "status")
    public void setStatus(AndroidCustomView view, Boolean status) {
        view.setStatus(status);
    }

    public Map getExportedCustomBubblingEventTypeConstants() {

        String eventName = "onClickEvent";
        String propName = "onClick";
        Map onClickHandler = MapBuilder.of("phasedRegistrationNames",MapBuilder.of("bubbled", propName));

        Builder events = MapBuilder.builder();
        events.put(eventName, onClickHandler);
        return events.build();

    }

}
