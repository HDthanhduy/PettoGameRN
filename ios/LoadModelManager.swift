//
//  LoadModelManager.swift
//  PettoGameRN
//
//  Created by Thanh Duy on 20/07/2022.
//

import Foundation
import UIKit

@objc(LoadModelManager)
class LoadModelManager: RCTViewManager {
  
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
  override func view() -> UIView! {
    return ModelView()
  }
  
}
