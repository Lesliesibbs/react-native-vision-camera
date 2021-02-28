require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "VisionCamera"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => "11.0" }
  s.source       = { :git => "https://github.com/mrousavy/react-native-vision-camera.git", :tag => "#{s.version}" }

  s.pod_target_xcconfig = {
    'DEFINES_MODULE' => 'YES'
  }
  s.requires_arc = true

  s.subspec 'FrameProcessors' do |fp|
    fp.name = 'FrameProcessors'
    # All source files that should be publicly visible
    # Note how this does not include headers, since those can nameclash.
    fp.source_files = [
      "ios/**/*.mm",
      "ios/Frame Processor/FrameProcessorDelegate.h",
      "ios/Frame Processor/FrameProcessorBindings.h",
      "cpp/**/*.{cpp}"
    ]
    # Any private headers that are not globally unique should be mentioned here.
    # Otherwise there will be a nameclash, since CocoaPods flattens out any header directories
    # See https://github.com/firebase/firebase-ios-sdk/issues/4035 for more details.
    fp.preserve_paths = [
      'cpp/**/*.h',
      'ios/**/*.h'
    ]
    fp.pod_target_xcconfig = {
      "HEADER_SEARCH_PATHS" => "\"$(inherited)\" \"$(PODS_TARGET_SRCROOT)/ReactCommon\" \"$(PODS_TARGET_SRCROOT)\" \"$(PODS_ROOT)/boost-for-react-native\" \"$(PODS_ROOT)/DoubleConversion\" \"$(PODS_ROOT)/Headers/Private/React-Core\" "
    }
    fp.xcconfig = {
      "CLANG_CXX_LANGUAGE_STANDARD" => "c++14",
      "HEADER_SEARCH_PATHS" => "\"$(inherited)\" \"$(PODS_ROOT)/boost-for-react-native\""
    }
    fp.dependency 'ReactCommon/turbomodule/core'
  end

  s.subspec 'Core' do |core|
    core.name = 'Core'
    core.source_files = [
      "ios/**/*.{m,swift}",
      "ios/CameraBridge.h",
    ]
    core.public_header_files = [
      "ios/CameraBridge.h"
    ]
    core.dependency "React-Core"
  end

end
