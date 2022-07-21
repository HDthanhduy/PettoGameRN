package com.pettogamern;

import android.content.Context
import android.graphics.Color
import android.view.LayoutInflater
import android.view.SurfaceView
import android.view.View
import com.facebook.react.common.MapBuilder
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import filamentandroid.CustomViewer


class AndroidCustomViewManagerLoadModel : SimpleViewManager<AndroidCustomView?>() {
    override fun getName(): String {
        return REACT_CLASS
    }

    public override fun createViewInstance(context: ThemedReactContext): AndroidCustomView {

        val inflater = context.getSystemService(Context.LAYOUT_INFLATER_SERVICE) as LayoutInflater
        val view = inflater.inflate(R.layout.custom_view, null) as AndroidCustomView

        val surfaceView = view.findViewById<View>(R.id.surface_view) as SurfaceView
        //val surfaceView : SurfaceView = SurfaceView(context)
        //surfaceView.setBackgroundColor(Color.GREEN)


        var customViewer: CustomViewer = CustomViewer()
        customViewer.run {
            loadEntity()
            setSurfaceView(requireNotNull(surfaceView))

            //directory and model each as param
            loadGlb(view.context, "grogu", "panda2")
            //loadGltf(view.context, "warcraft", "scene");

            //directory and model as one
            //            loadGlb(this, "grogu/grogu");

            //Enviroments and Lightning (OPTIONAL)
            loadIndirectLight(view.context, "venetian_crossroads_2k")
            //loadEnviroment(this, "venetian_crossroads_2k");
        }
        customViewer.onResume()

        return view
        //return surfaceView
    }

    @ReactProp(name = "status")
    fun setStatus(view: AndroidCustomView, status: Boolean?) {
        view.setStatus(status!!)
    }

    /*override fun getExportedCustomBubblingEventTypeConstants(): MutableMap<String, Any>? {
        val eventName = "onClickEvent"
        val propName = "onClick"
        val onClickHandler: Map<*, *> =
            MapBuilder.of("phasedRegistrationNames", MapBuilder.of("bubbled", propName))
        val events: MapBuilder.Builder<*, *> = MapBuilder.builder<Any, Any>()
        events.put(eventName, onClickHandler)
        return events.build()
    }*/

    companion object {
        const val REACT_CLASS = "RNCSTMCamera"
    }
}