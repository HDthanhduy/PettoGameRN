//
//  ModelView.swift.swift
//  PettoGameRN
//
//  Created by Thanh Duy on 20/07/2022.
//

import Foundation
import SceneKit
import GLTFKit2

class ModelView: UIView {
  
  var asset: GLTFAsset? {
    didSet {
      if let asset = asset {
        let source = GLTFSCNSceneSource(asset: asset)
        sceneView.scene = source.defaultScene
        animations = source.animations
        animations.first?.play()
        sceneView.scene?.rootNode.addChildNode(cameraNode)
      }
    }
  }
  
  private var sceneView: SCNView!

  private var animations = [GLTFSCNAnimation]()

  private let camera = SCNCamera()
  private let cameraNode = SCNNode()
 
  override init(frame: CGRect) {
    super.init(frame: frame)
    setupView()
  }
 
  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
    setupView()
  }
  
  private func setupView() {
    sceneView = SCNView(frame: UIScreen.main.bounds, options: nil)
    addSubview(sceneView)
    cameraNode.camera = camera
    cameraNode.position = SCNVector3(0, 0, 3.5)
    camera.automaticallyAdjustsZRange = true

    sceneView.allowsCameraControl = true
    sceneView.autoenablesDefaultLighting = true
    sceneView.pointOfView = cameraNode

    loadAsset()
  }
 
  private func loadAsset() {
      guard let assetURL = Bundle.main.url(forResource: "panda2", withExtension: "glb", subdirectory: "Models")
      else {
          print("Failed to find asset for URL")
          return
      }

      GLTFAsset.load(with: assetURL, options: [:]) { (progress, status, maybeAsset, maybeError, _) in
          DispatchQueue.main.async {
              if status == .complete {
                  self.asset = maybeAsset
              } else if let error = maybeError {
                  print("Failed to load glTF asset: \(error)")
              }
          }
      }
  }
 
}



