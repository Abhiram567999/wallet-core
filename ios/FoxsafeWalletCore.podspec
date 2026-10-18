require 'json'

package = JSON.parse(File.read(File.join(__dir__, '..', 'package.json')))

Pod::Spec.new do |s|
  s.name           = 'FoxsafeWalletCore'
  s.version        = package['version']
  s.summary        = package['description']
  s.license        = package['license']
  s.author         = 'Foxsafe'
  s.homepage       = 'https://github.com/Abhiram567999/wallet-core'
  s.platforms      = { :ios => '16.4' }
  s.swift_version  = '5.9'
  s.source         = { git: 'https://github.com/Abhiram567999/wallet-core.git' }
  s.static_framework = true

  s.dependency 'ExpoModulesCore'
  s.dependency 'TrustWalletCore', '4.8.4'

  # Swift module code plus the vendored Argon2 reference implementation (Argon2/README.md).
  s.source_files = '*.swift', 'Argon2/include/argon2.h', 'Argon2/src/**/*.{c,h}'
  s.public_header_files = 'Argon2/include/argon2.h'
  s.pod_target_xcconfig = {
    'GCC_PREPROCESSOR_DEFINITIONS' => '$(inherited) ARGON2_NO_THREADS=1',
    # Argon2 is deliberately heavy; unoptimised debug C makes unlocking ~10x slower.
    'GCC_OPTIMIZATION_LEVEL' => '3',
    'HEADER_SEARCH_PATHS' => '$(inherited) "$(PODS_TARGET_SRCROOT)/Argon2/include"',
  }
end
