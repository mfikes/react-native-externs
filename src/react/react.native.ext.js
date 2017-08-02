/**********************************************************************
 * Extern for ReactNative
 * Initially generated using javascript-externs-generator.extern namespace
 * from http://jmmk.github.io/javascript-externs-generator in running
 * app: First (js-delete react-native "Navigator") and then
 * (javascript-externs-generator.extern/extract "ReactNative" react-native)
 * Formatted with https://prettier.io with print-width set to 5.
 **********************************************************************/
var ReactNative = {
    ART: {
        ClippingRectangle: function() {},
        Group: {
            contextTypes: {
                isInSurface: function() {}
            }
        },
        LinearGradient: function() {},
        Path: function() {},
        Pattern: function() {},
        RadialGradient: function() {},
        Shape: function() {},
        Surface: {
            childContextTypes: {
                isInSurface: {
                    isRequired: function() {}
                }
            }
        },
        Text: function() {},
        Transform: function() {}
    },
    AccessibilityInfo: {
        addEventListener: function() {},
        announceForAccessibility: function() {},
        fetch: function() {},
        removeEventListener: function() {},
        setAccessibilityFocus: function() {}
    },
    ActionSheetIOS: {
        showActionSheetWithOptions: function() {},
        showShareActionSheetWithOptions: function() {}
    },
    ActivityIndicator: {
        defaultProps: {
            animating: {},
            color: {},
            hidesWhenStopped: {},
            size: {}
        },
        displayName: {},
        getDefaultProps: {
            isReactClassApproved: {}
        },
        propTypes: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityLabel: {
                isRequired: function() {}
            },
            accessibilityLiveRegion: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessibilityViewIsModal: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            animating: {
                isRequired: function() {}
            },
            collapsable: {
                isRequired: function() {}
            },
            color: {
                isRequired: function() {}
            },
            hidesWhenStopped: {
                isRequired: function() {}
            },
            hitSlop: {
                isRequired: function() {}
            },
            importantForAccessibility: {
                isRequired: function() {}
            },
            nativeID: {
                isRequired: function() {}
            },
            needsOffscreenAlphaCompositing: {
                isRequired: function() {}
            },
            onAccessibilityTap: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onMagicTap: {
                isRequired: function() {}
            },
            onMoveShouldSetResponder: {
                isRequired: function() {}
            },
            onMoveShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onResponderGrant: {
                isRequired: function() {}
            },
            onResponderMove: {
                isRequired: function() {}
            },
            onResponderReject: {
                isRequired: function() {}
            },
            onResponderRelease: {
                isRequired: function() {}
            },
            onResponderTerminate: {
                isRequired: function() {}
            },
            onResponderTerminationRequest: {
                isRequired: function() {}
            },
            onStartShouldSetResponder: {
                isRequired: function() {}
            },
            onStartShouldSetResponderCapture: {
                isRequired: function() {}
            },
            pointerEvents: {
                isRequired: function() {}
            },
            removeClippedSubviews: {
                isRequired: function() {}
            },
            renderToHardwareTextureAndroid: {
                isRequired: function() {}
            },
            shouldRasterizeIOS: {
                isRequired: function() {}
            },
            size: {
                isRequired: function() {}
            },
            style: function() {},
            testID: {
                isRequired: function() {}
            }
        }
    },
    AdSupportIOS: {
        getAdvertisingId: function() {},
        getAdvertisingTrackingEnabled: function() {}
    },
    Alert: function() {},
    AlertIOS: function() {},
    Animated: {
        Image: {
            propTypes: {
                style: function() {}
            }
        },
        Interpolation: function() {},
        ScrollView: {
            propTypes: {
                style: function() {}
            }
        },
        Text: {
            propTypes: {
                style: function() {}
            }
        },
        Value: function() {},
        ValueXY: function() {},
        View: {
            propTypes: {
                style: function() {}
            }
        },
        __PropsOnlyForTests: function() {},
        add: function() {},
        attachNativeEvent: function() {},
        createAnimatedComponent: function() {},
        decay: function() {},
        delay: function() {},
        diffClamp: function() {},
        divide: function() {},
        event: function() {},
        forkEvent: function() {},
        loop: function() {},
        modulo: function() {},
        multiply: function() {},
        parallel: function() {},
        sequence: function() {},
        spring: function() {},
        stagger: function() {},
        timing: function() {},
        unforkEvent: function() {}
    },
    AppRegistry: {
        getAppKeys: function() {},
        getRegistry: function() {},
        getRunnable: function() {},
        getSectionKeys: function() {},
        getSections: function() {},
        registerComponent: function() {},
        registerConfig: function() {},
        registerHeadlessTask: function() {},
        registerRunnable: function() {},
        registerSection: function() {},
        runApplication: function() {},
        setComponentProviderInstrumentationHook: function() {},
        startHeadlessTask: function() {},
        unmountApplicationComponentAtRootTag: function() {}
    },
    AppState: {
        _eventHandlers: {
            change: {},
            memoryWarning: {}
        },
        _nativeModule: {
            addListener: {
                type: {}
            },
            getCurrentAppState: {
                type: {}
            },
            initialAppState: {},
            removeListeners: {
                type: {}
            }
        },
        _subscriber: {
            _currentSubscription: {},
            _subscriptionsForType: {
                appStateDidChange: {},
                collectBugExtraData: {},
                didCompleteNetworkResponse: {},
                didReceiveNetworkData: {},
                didReceiveNetworkDataProgress: {},
                didReceiveNetworkIncrementalData: {},
                didReceiveNetworkResponse: {},
                didSendNetworkData: {},
                didUpdateDimensions: {},
                settingsUpdated: {},
                toggleElementInspector: {},
                websocketClosed: {},
                websocketFailed: {},
                websocketMessage: {},
                websocketOpen: {}
            }
        },
        currentState: {},
        isAvailable: {}
    },
    AsyncStorage: {
        _getKeys: {},
        _getRequests: {},
        _immediate: {},
        clear: function() {},
        flushGetRequests: function() {},
        getAllKeys: function() {},
        getItem: function() {},
        mergeItem: function() {},
        multiGet: function() {},
        multiMerge: function() {},
        multiRemove: function() {},
        multiSet: function() {},
        removeItem: function() {},
        setItem: function() {}
    },
    BackAndroid: {
        addEventListener: function() {},
        exitApp: function() {},
        removeEventListener: function() {}
    },
    BackHandler: {
        addEventListener: function() {},
        exitApp: function() {},
        removeEventListener: function() {}
    },
    Button: {
        propTypes: {
            accessibilityLabel: {
                isRequired: function() {}
            },
            color: {
                isRequired: function() {}
            },
            disabled: {
                isRequired: function() {}
            },
            onPress: function() {},
            testID: {
                isRequired: function() {}
            },
            title: function() {}
        }
    },
    CameraRoll: {
        AssetTypeOptions: {
            All: {},
            Photos: {},
            Videos: {}
        },
        GroupTypesOptions: {
            Album: {},
            All: {},
            Event: {},
            Faces: {},
            Library: {},
            PhotoStream: {},
            SavedPhotos: {}
        }
    },
    Clipboard: {
        getString: function() {},
        setString: function() {}
    },
    ColorPropType: {
        isRequired: function() {}
    },
    DatePickerAndroid: {
        open: function() {}
    },
    DatePickerIOS: {
        defaultProps: {
            mode: {}
        },
        displayName: {},
        getDefaultProps: {
            isReactClassApproved: {}
        },
        propTypes: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityLabel: {
                isRequired: function() {}
            },
            accessibilityLiveRegion: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessibilityViewIsModal: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            collapsable: {
                isRequired: function() {}
            },
            date: function() {},
            hitSlop: {
                isRequired: function() {}
            },
            importantForAccessibility: {
                isRequired: function() {}
            },
            maximumDate: {
                isRequired: function() {}
            },
            minimumDate: {
                isRequired: function() {}
            },
            minuteInterval: {
                isRequired: function() {}
            },
            mode: {
                isRequired: function() {}
            },
            nativeID: {
                isRequired: function() {}
            },
            needsOffscreenAlphaCompositing: {
                isRequired: function() {}
            },
            onAccessibilityTap: {
                isRequired: function() {}
            },
            onDateChange: function() {},
            onLayout: {
                isRequired: function() {}
            },
            onMagicTap: {
                isRequired: function() {}
            },
            onMoveShouldSetResponder: {
                isRequired: function() {}
            },
            onMoveShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onResponderGrant: {
                isRequired: function() {}
            },
            onResponderMove: {
                isRequired: function() {}
            },
            onResponderReject: {
                isRequired: function() {}
            },
            onResponderRelease: {
                isRequired: function() {}
            },
            onResponderTerminate: {
                isRequired: function() {}
            },
            onResponderTerminationRequest: {
                isRequired: function() {}
            },
            onStartShouldSetResponder: {
                isRequired: function() {}
            },
            onStartShouldSetResponderCapture: {
                isRequired: function() {}
            },
            pointerEvents: {
                isRequired: function() {}
            },
            removeClippedSubviews: {
                isRequired: function() {}
            },
            renderToHardwareTextureAndroid: {
                isRequired: function() {}
            },
            shouldRasterizeIOS: {
                isRequired: function() {}
            },
            style: function() {},
            testID: {
                isRequired: function() {}
            },
            timeZoneOffsetInMinutes: {
                isRequired: function() {}
            }
        }
    },
    DeviceEventEmitter: {
        _currentSubscription: {
            context: {},
            emitter: {
                _nativeModule: {
                    addListener: {
                        type: {}
                    },
                    close: {
                        type: {}
                    },
                    connect: {
                        type: {}
                    },
                    ping: {
                        type: {}
                    },
                    removeListeners: {
                        type: {}
                    },
                    send: {
                        type: {}
                    },
                    sendBinary: {
                        type: {}
                    }
                },
                _subscriber: {
                    _currentSubscription: {},
                    _subscriptionsForType: {
                        appStateDidChange: {},
                        collectBugExtraData: {},
                        didCompleteNetworkResponse: {},
                        didReceiveNetworkData: {},
                        didReceiveNetworkDataProgress: {},
                        didReceiveNetworkIncrementalData: {},
                        didReceiveNetworkResponse: {},
                        didSendNetworkData: {},
                        didUpdateDimensions: {},
                        settingsUpdated: {},
                        toggleElementInspector: {},
                        websocketClosed: {},
                        websocketFailed: {},
                        websocketMessage: {},
                        websocketOpen: {}
                    }
                }
            },
            eventType: {},
            key: {},
            listener: function() {},
            subscriber: {
                _currentSubscription: {},
                _subscriptionsForType: {
                    appStateDidChange: {},
                    collectBugExtraData: {},
                    didCompleteNetworkResponse: {},
                    didReceiveNetworkData: {},
                    didReceiveNetworkDataProgress: {},
                    didReceiveNetworkIncrementalData: {},
                    didReceiveNetworkResponse: {},
                    didSendNetworkData: {},
                    didUpdateDimensions: {},
                    settingsUpdated: {},
                    toggleElementInspector: {},
                    websocketClosed: {},
                    websocketFailed: {},
                    websocketMessage: {},
                    websocketOpen: {}
                }
            }
        },
        _subscriber: {
            _currentSubscription: {},
            _subscriptionsForType: {
                appStateDidChange: {},
                collectBugExtraData: {},
                didCompleteNetworkResponse: {},
                didReceiveNetworkData: {},
                didReceiveNetworkDataProgress: {},
                didReceiveNetworkIncrementalData: {},
                didReceiveNetworkResponse: {},
                didSendNetworkData: {},
                didUpdateDimensions: {},
                settingsUpdated: {},
                toggleElementInspector: {},
                websocketClosed: {},
                websocketFailed: {},
                websocketMessage: {},
                websocketOpen: {}
            }
        },
        sharedSubscriber: {
            _currentSubscription: {},
            _subscriptionsForType: {
                appStateDidChange: {},
                collectBugExtraData: {},
                didCompleteNetworkResponse: {},
                didReceiveNetworkData: {},
                didReceiveNetworkDataProgress: {},
                didReceiveNetworkIncrementalData: {},
                didReceiveNetworkResponse: {},
                didSendNetworkData: {},
                didUpdateDimensions: {},
                settingsUpdated: {},
                toggleElementInspector: {},
                websocketClosed: {},
                websocketFailed: {},
                websocketMessage: {},
                websocketOpen: {}
            }
        }
    },
    DeviceInfo: {
        Dimensions: {
            screen: {
                fontScale: {},
                height: {},
                scale: {},
                width: {}
            },
            window: {
                fontScale: {},
                height: {},
                scale: {},
                width: {}
            }
        }
    },
    Dimensions: function() {},
    DrawerLayoutAndroid: function() {},
    Easing: function() {},
    EdgeInsetsPropType: {
        isRequired: function() {}
    },
    FlatList: {
        defaultProps: {
            disableVirtualization: {},
            horizontal: {},
            initialNumToRender: {},
            keyExtractor: function() {},
            maxToRenderPerBatch: {},
            numColumns: {},
            onEndReachedThreshold: {},
            renderScrollComponent: function() {},
            scrollEventThrottle: {},
            updateCellsBatchingPeriod: {},
            windowSize: {}
        }
    },
    I18nManager: {
        allowRTL: {
            type: {}
        },
        forceRTL: {
            type: {}
        },
        isRTL: {}
    },
    Image: {
        displayName: {},
        getSize: function() {},
        prefetch: function() {},
        propTypes: {
            accessibilityLabel: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            blurRadius: {
                isRequired: function() {}
            },
            capInsets: {
                isRequired: function() {}
            },
            defaultSource: {
                isRequired: function() {}
            },
            onError: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onLoad: {
                isRequired: function() {}
            },
            onLoadEnd: {
                isRequired: function() {}
            },
            onLoadStart: {
                isRequired: function() {}
            },
            onPartialLoad: {
                isRequired: function() {}
            },
            onProgress: {
                isRequired: function() {}
            },
            resizeMethod: {
                isRequired: function() {}
            },
            resizeMode: {
                isRequired: function() {}
            },
            source: {
                isRequired: function() {}
            },
            style: function() {},
            testID: {
                isRequired: function() {}
            }
        },
        resizeMode: {
            center: {},
            contain: {},
            cover: {},
            repeat: {},
            stretch: {}
        },
        resolveAssetSource: {
            pickScale: function() {},
            setCustomSourceTransformer: function() {}
        }
    },
    ImageBackground: function() {},
    ImageEditor: function() {},
    ImagePickerIOS: {
        canRecordVideos: function() {},
        canUseCamera: function() {},
        openCameraDialog: function() {},
        openSelectDialog: function() {}
    },
    ImageStore: function() {},
    InteractionManager: {
        Events: {
            interactionComplete: {},
            interactionStart: {}
        },
        addListener: function() {},
        clearInteractionHandle: function() {},
        createInteractionHandle: function() {},
        runAfterInteractions: function() {},
        setDeadline: function() {}
    },
    Keyboard: {
        _nativeModule: {
            addListener: {
                type: {}
            },
            removeListeners: {
                type: {}
            }
        },
        _subscriber: {
            _currentSubscription: {},
            _subscriptionsForType: {
                appStateDidChange: {},
                collectBugExtraData: {},
                didCompleteNetworkResponse: {},
                didReceiveNetworkData: {},
                didReceiveNetworkDataProgress: {},
                didReceiveNetworkIncrementalData: {},
                didReceiveNetworkResponse: {},
                didSendNetworkData: {},
                didUpdateDimensions: {},
                settingsUpdated: {},
                toggleElementInspector: {},
                websocketClosed: {},
                websocketFailed: {},
                websocketMessage: {},
                websocketOpen: {}
            }
        },
        dismiss: function() {}
    },
    KeyboardAvoidingView: {
        defaultProps: {
            keyboardVerticalOffset: {}
        },
        displayName: {},
        getDefaultProps: {
            isReactClassApproved: {}
        },
        propTypes: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityLabel: {
                isRequired: function() {}
            },
            accessibilityLiveRegion: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessibilityViewIsModal: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            behavior: {
                isRequired: function() {}
            },
            collapsable: {
                isRequired: function() {}
            },
            contentContainerStyle: function() {},
            hitSlop: {
                isRequired: function() {}
            },
            importantForAccessibility: {
                isRequired: function() {}
            },
            keyboardVerticalOffset: function() {},
            nativeID: {
                isRequired: function() {}
            },
            needsOffscreenAlphaCompositing: {
                isRequired: function() {}
            },
            onAccessibilityTap: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onMagicTap: {
                isRequired: function() {}
            },
            onMoveShouldSetResponder: {
                isRequired: function() {}
            },
            onMoveShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onResponderGrant: {
                isRequired: function() {}
            },
            onResponderMove: {
                isRequired: function() {}
            },
            onResponderReject: {
                isRequired: function() {}
            },
            onResponderRelease: {
                isRequired: function() {}
            },
            onResponderTerminate: {
                isRequired: function() {}
            },
            onResponderTerminationRequest: {
                isRequired: function() {}
            },
            onStartShouldSetResponder: {
                isRequired: function() {}
            },
            onStartShouldSetResponderCapture: {
                isRequired: function() {}
            },
            pointerEvents: {
                isRequired: function() {}
            },
            removeClippedSubviews: {
                isRequired: function() {}
            },
            renderToHardwareTextureAndroid: {
                isRequired: function() {}
            },
            shouldRasterizeIOS: {
                isRequired: function() {}
            },
            style: function() {},
            testID: {
                isRequired: function() {}
            }
        }
    },
    LayoutAnimation: {
        Presets: {
            easeInEaseOut: {
                create: {
                    property: {},
                    type: {}
                },
                delete: {
                    property: {},
                    type: {}
                },
                duration: {},
                update: {
                    type: {}
                }
            },
            linear: {
                create: {
                    property: {},
                    type: {}
                },
                delete: {
                    property: {},
                    type: {}
                },
                duration: {},
                update: {
                    type: {}
                }
            },
            spring: {
                create: {
                    property: {},
                    type: {}
                },
                delete: {
                    property: {},
                    type: {}
                },
                duration: {},
                update: {
                    springDamping: {},
                    type: {}
                }
            }
        },
        Properties: {
            opacity: {},
            scaleXY: {}
        },
        Types: {
            easeIn: {},
            easeInEaseOut: {},
            easeOut: {},
            keyboard: {},
            linear: {},
            spring: {}
        },
        checkConfig: function() {},
        configureNext: function() {},
        create: function() {},
        easeInEaseOut: function() {},
        linear: function() {},
        spring: function() {}
    },
    Linking: {
        _nativeModule: {
            addListener: {
                type: {}
            },
            canOpenURL: {
                type: {}
            },
            getInitialURL: {
                type: {}
            },
            openURL: {
                type: {}
            },
            removeListeners: {
                type: {}
            }
        },
        _subscriber: {
            _currentSubscription: {},
            _subscriptionsForType: {
                appStateDidChange: {},
                collectBugExtraData: {},
                didCompleteNetworkResponse: {},
                didReceiveNetworkData: {},
                didReceiveNetworkDataProgress: {},
                didReceiveNetworkIncrementalData: {},
                didReceiveNetworkResponse: {},
                didSendNetworkData: {},
                didUpdateDimensions: {},
                settingsUpdated: {},
                toggleElementInspector: {},
                websocketClosed: {},
                websocketFailed: {},
                websocketMessage: {},
                websocketOpen: {}
            }
        }
    },
    ListView: {
        DataSource: function() {},
        defaultProps: {
            initialListSize: {},
            onEndReachedThreshold: {},
            pageSize: {},
            renderScrollComponent: function() {},
            scrollRenderAheadDistance: {},
            stickyHeaderIndices: {},
            stickySectionHeadersEnabled: {}
        },
        displayName: {},
        getDefaultProps: {
            isReactClassApproved: {}
        },
        propTypes: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityLabel: {
                isRequired: function() {}
            },
            accessibilityLiveRegion: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessibilityViewIsModal: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            alwaysBounceHorizontal: {
                isRequired: function() {}
            },
            alwaysBounceVertical: {
                isRequired: function() {}
            },
            automaticallyAdjustContentInsets: {
                isRequired: function() {}
            },
            bounces: {
                isRequired: function() {}
            },
            bouncesZoom: {
                isRequired: function() {}
            },
            canCancelContentTouches: {
                isRequired: function() {}
            },
            centerContent: {
                isRequired: function() {}
            },
            collapsable: {
                isRequired: function() {}
            },
            contentContainerStyle: function() {},
            contentInset: {
                isRequired: function() {}
            },
            contentOffset: {
                isRequired: function() {}
            },
            dataSource: function() {},
            decelerationRate: {
                isRequired: function() {}
            },
            directionalLockEnabled: {
                isRequired: function() {}
            },
            enableEmptySections: {
                isRequired: function() {}
            },
            endFillColor: {
                isRequired: function() {}
            },
            hitSlop: {
                isRequired: function() {}
            },
            horizontal: {
                isRequired: function() {}
            },
            importantForAccessibility: {
                isRequired: function() {}
            },
            indicatorStyle: {
                isRequired: function() {}
            },
            initialListSize: function() {},
            keyboardDismissMode: {
                isRequired: function() {}
            },
            keyboardShouldPersistTaps: {
                isRequired: function() {}
            },
            maximumZoomScale: {
                isRequired: function() {}
            },
            minimumZoomScale: {
                isRequired: function() {}
            },
            nativeID: {
                isRequired: function() {}
            },
            needsOffscreenAlphaCompositing: {
                isRequired: function() {}
            },
            onAccessibilityTap: {
                isRequired: function() {}
            },
            onChangeVisibleRows: {
                isRequired: function() {}
            },
            onContentSizeChange: {
                isRequired: function() {}
            },
            onEndReached: {
                isRequired: function() {}
            },
            onEndReachedThreshold: function() {},
            onLayout: {
                isRequired: function() {}
            },
            onMagicTap: {
                isRequired: function() {}
            },
            onMoveShouldSetResponder: {
                isRequired: function() {}
            },
            onMoveShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onResponderGrant: {
                isRequired: function() {}
            },
            onResponderMove: {
                isRequired: function() {}
            },
            onResponderReject: {
                isRequired: function() {}
            },
            onResponderRelease: {
                isRequired: function() {}
            },
            onResponderTerminate: {
                isRequired: function() {}
            },
            onResponderTerminationRequest: {
                isRequired: function() {}
            },
            onScroll: {
                isRequired: function() {}
            },
            onScrollAnimationEnd: {
                isRequired: function() {}
            },
            onStartShouldSetResponder: {
                isRequired: function() {}
            },
            onStartShouldSetResponderCapture: {
                isRequired: function() {}
            },
            overScrollMode: {
                isRequired: function() {}
            },
            pageSize: function() {},
            pagingEnabled: {
                isRequired: function() {}
            },
            pointerEvents: {
                isRequired: function() {}
            },
            refreshControl: {
                isRequired: function() {}
            },
            removeClippedSubviews: {
                isRequired: function() {}
            },
            renderFooter: {
                isRequired: function() {}
            },
            renderHeader: {
                isRequired: function() {}
            },
            renderRow: function() {},
            renderScrollComponent: function() {},
            renderSectionHeader: {
                isRequired: function() {}
            },
            renderSeparator: {
                isRequired: function() {}
            },
            renderToHardwareTextureAndroid: {
                isRequired: function() {}
            },
            scrollEnabled: {
                isRequired: function() {}
            },
            scrollEventThrottle: {
                isRequired: function() {}
            },
            scrollIndicatorInsets: {
                isRequired: function() {}
            },
            scrollPerfTag: {
                isRequired: function() {}
            },
            scrollRenderAheadDistance: function() {},
            scrollsToTop: {
                isRequired: function() {}
            },
            shouldRasterizeIOS: {
                isRequired: function() {}
            },
            showsHorizontalScrollIndicator: {
                isRequired: function() {}
            },
            showsVerticalScrollIndicator: {
                isRequired: function() {}
            },
            snapToAlignment: {
                isRequired: function() {}
            },
            snapToInterval: {
                isRequired: function() {}
            },
            stickyHeaderIndices: function() {},
            stickySectionHeadersEnabled: {
                isRequired: function() {}
            },
            style: function() {},
            testID: {
                isRequired: function() {}
            },
            zoomScale: {
                isRequired: function() {}
            }
        }
    },
    Modal: {
        contextTypes: {
            rootTag: {
                isRequired: function() {}
            }
        },
        defaultProps: {
            hardwareAccelerated: {},
            visible: {}
        },
        propTypes: {
            animated: function() {},
            animationType: {
                isRequired: function() {}
            },
            hardwareAccelerated: {
                isRequired: function() {}
            },
            onOrientationChange: {
                isRequired: function() {}
            },
            onRequestClose: {
                isRequired: function() {}
            },
            onShow: {
                isRequired: function() {}
            },
            supportedOrientations: {
                isRequired: function() {}
            },
            transparent: {
                isRequired: function() {}
            },
            visible: {
                isRequired: function() {}
            }
        }
    },
    NativeAppEventEmitter: {
        _currentSubscription: {
            context: {},
            emitter: {
                _nativeModule: {
                    addListener: {
                        type: {}
                    },
                    close: {
                        type: {}
                    },
                    connect: {
                        type: {}
                    },
                    ping: {
                        type: {}
                    },
                    removeListeners: {
                        type: {}
                    },
                    send: {
                        type: {}
                    },
                    sendBinary: {
                        type: {}
                    }
                },
                _subscriber: {
                    _currentSubscription: {},
                    _subscriptionsForType: {
                        appStateDidChange: {},
                        collectBugExtraData: {},
                        didCompleteNetworkResponse: {},
                        didReceiveNetworkData: {},
                        didReceiveNetworkDataProgress: {},
                        didReceiveNetworkIncrementalData: {},
                        didReceiveNetworkResponse: {},
                        didSendNetworkData: {},
                        didUpdateDimensions: {},
                        settingsUpdated: {},
                        toggleElementInspector: {},
                        websocketClosed: {},
                        websocketFailed: {},
                        websocketMessage: {},
                        websocketOpen: {}
                    }
                }
            },
            eventType: {},
            key: {},
            listener: function() {},
            subscriber: {
                _currentSubscription: {},
                _subscriptionsForType: {
                    appStateDidChange: {},
                    collectBugExtraData: {},
                    didCompleteNetworkResponse: {},
                    didReceiveNetworkData: {},
                    didReceiveNetworkDataProgress: {},
                    didReceiveNetworkIncrementalData: {},
                    didReceiveNetworkResponse: {},
                    didSendNetworkData: {},
                    didUpdateDimensions: {},
                    settingsUpdated: {},
                    toggleElementInspector: {},
                    websocketClosed: {},
                    websocketFailed: {},
                    websocketMessage: {},
                    websocketOpen: {}
                }
            }
        },
        _subscriber: {
            _currentSubscription: {},
            _subscriptionsForType: {
                appStateDidChange: {},
                collectBugExtraData: {},
                didCompleteNetworkResponse: {},
                didReceiveNetworkData: {},
                didReceiveNetworkDataProgress: {},
                didReceiveNetworkIncrementalData: {},
                didReceiveNetworkResponse: {},
                didSendNetworkData: {},
                didUpdateDimensions: {},
                settingsUpdated: {},
                toggleElementInspector: {},
                websocketClosed: {},
                websocketFailed: {},
                websocketMessage: {},
                websocketOpen: {}
            }
        },
        sharedSubscriber: {
            _currentSubscription: {},
            _subscriptionsForType: {
                appStateDidChange: {},
                collectBugExtraData: {},
                didCompleteNetworkResponse: {},
                didReceiveNetworkData: {},
                didReceiveNetworkDataProgress: {},
                didReceiveNetworkIncrementalData: {},
                didReceiveNetworkResponse: {},
                didSendNetworkData: {},
                didUpdateDimensions: {},
                settingsUpdated: {},
                toggleElementInspector: {},
                websocketClosed: {},
                websocketFailed: {},
                websocketMessage: {},
                websocketOpen: {}
            }
        }
    },
    NativeEventEmitter: function() {},
    NativeModules: {},
    NavigatorIOS: {
        childContextTypes: {
            focusEmitter: {
                isRequired: function() {}
            },
            onFocusRequested: {
                isRequired: function() {}
            }
        },
        defaultProps: {
            translucent: {}
        },
        displayName: {},
        getDefaultProps: {
            isReactClassApproved: {}
        },
        propTypes: {
            barTintColor: {
                isRequired: function() {}
            },
            initialRoute: function() {},
            interactivePopGestureEnabled: {
                isRequired: function() {}
            },
            itemWrapperStyle: function() {},
            navigationBarHidden: {
                isRequired: function() {}
            },
            shadowHidden: {
                isRequired: function() {}
            },
            tintColor: {
                isRequired: function() {}
            },
            titleTextColor: {
                isRequired: function() {}
            },
            translucent: {
                isRequired: function() {}
            }
        }
    },
    NetInfo: {
        addEventListener: function() {},
        fetch: function() {},
        isConnected: {
            addEventListener: function() {},
            fetch: function() {},
            removeEventListener: function() {}
        },
        isConnectionExpensive: function() {},
        removeEventListener: function() {}
    },
    PanResponder: {
        _initializeGestureState: function() {},
        _updateGestureStateOnMove: function() {},
        create: function() {}
    },
    PermissionsAndroid: {
        PERMISSIONS: {
            ACCESS_COARSE_LOCATION: {},
            ACCESS_FINE_LOCATION: {},
            ADD_VOICEMAIL: {},
            BODY_SENSORS: {},
            CALL_PHONE: {},
            CAMERA: {},
            GET_ACCOUNTS: {},
            PROCESS_OUTGOING_CALLS: {},
            READ_CALENDAR: {},
            READ_CALL_LOG: {},
            READ_CONTACTS: {},
            READ_EXTERNAL_STORAGE: {},
            READ_PHONE_STATE: {},
            READ_SMS: {},
            RECEIVE_MMS: {},
            RECEIVE_SMS: {},
            RECEIVE_WAP_PUSH: {},
            RECORD_AUDIO: {},
            SEND_SMS: {},
            USE_SIP: {},
            WRITE_CALENDAR: {},
            WRITE_CALL_LOG: {},
            WRITE_CONTACTS: {},
            WRITE_EXTERNAL_STORAGE: {}
        },
        RESULTS: {
            DENIED: {},
            GRANTED: {},
            NEVER_ASK_AGAIN: {}
        }
    },
    Picker: {
        Item: {
            propTypes: {
                color: {
                    isRequired: function() {}
                },
                label: function() {},
                testID: {
                    isRequired: function() {}
                },
                value: {
                    isRequired: function() {}
                }
            }
        },
        MODE_DIALOG: {},
        MODE_DROPDOWN: {},
        defaultProps: {
            mode: {}
        },
        propTypes: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityLabel: {
                isRequired: function() {}
            },
            accessibilityLiveRegion: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessibilityViewIsModal: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            collapsable: {
                isRequired: function() {}
            },
            enabled: {
                isRequired: function() {}
            },
            hitSlop: {
                isRequired: function() {}
            },
            importantForAccessibility: {
                isRequired: function() {}
            },
            itemStyle: function() {},
            mode: {
                isRequired: function() {}
            },
            nativeID: {
                isRequired: function() {}
            },
            needsOffscreenAlphaCompositing: {
                isRequired: function() {}
            },
            onAccessibilityTap: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onMagicTap: {
                isRequired: function() {}
            },
            onMoveShouldSetResponder: {
                isRequired: function() {}
            },
            onMoveShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onResponderGrant: {
                isRequired: function() {}
            },
            onResponderMove: {
                isRequired: function() {}
            },
            onResponderReject: {
                isRequired: function() {}
            },
            onResponderRelease: {
                isRequired: function() {}
            },
            onResponderTerminate: {
                isRequired: function() {}
            },
            onResponderTerminationRequest: {
                isRequired: function() {}
            },
            onStartShouldSetResponder: {
                isRequired: function() {}
            },
            onStartShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onValueChange: {
                isRequired: function() {}
            },
            pointerEvents: {
                isRequired: function() {}
            },
            prompt: {
                isRequired: function() {}
            },
            removeClippedSubviews: {
                isRequired: function() {}
            },
            renderToHardwareTextureAndroid: {
                isRequired: function() {}
            },
            selectedValue: {
                isRequired: function() {}
            },
            shouldRasterizeIOS: {
                isRequired: function() {}
            },
            style: function() {},
            testID: {
                isRequired: function() {}
            }
        }
    },
    PickerIOS: {
        Item: {
            propTypes: {
                color: {
                    isRequired: function() {}
                },
                label: {
                    isRequired: function() {}
                },
                value: {
                    isRequired: function() {}
                }
            }
        },
        displayName: {},
        propTypes: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityLabel: {
                isRequired: function() {}
            },
            accessibilityLiveRegion: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessibilityViewIsModal: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            collapsable: {
                isRequired: function() {}
            },
            hitSlop: {
                isRequired: function() {}
            },
            importantForAccessibility: {
                isRequired: function() {}
            },
            itemStyle: function() {},
            nativeID: {
                isRequired: function() {}
            },
            needsOffscreenAlphaCompositing: {
                isRequired: function() {}
            },
            onAccessibilityTap: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onMagicTap: {
                isRequired: function() {}
            },
            onMoveShouldSetResponder: {
                isRequired: function() {}
            },
            onMoveShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onResponderGrant: {
                isRequired: function() {}
            },
            onResponderMove: {
                isRequired: function() {}
            },
            onResponderReject: {
                isRequired: function() {}
            },
            onResponderRelease: {
                isRequired: function() {}
            },
            onResponderTerminate: {
                isRequired: function() {}
            },
            onResponderTerminationRequest: {
                isRequired: function() {}
            },
            onStartShouldSetResponder: {
                isRequired: function() {}
            },
            onStartShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onValueChange: {
                isRequired: function() {}
            },
            pointerEvents: {
                isRequired: function() {}
            },
            removeClippedSubviews: {
                isRequired: function() {}
            },
            renderToHardwareTextureAndroid: {
                isRequired: function() {}
            },
            selectedValue: {
                isRequired: function() {}
            },
            shouldRasterizeIOS: {
                isRequired: function() {}
            },
            style: function() {},
            testID: {
                isRequired: function() {}
            }
        }
    },
    PixelRatio: function() {},
    Platform: {
        OS: {},
        Version: {},
        isPad: {},
        isTVOS: {},
        isTesting: {},
        select: function() {}
    },
    PointPropType: {
        isRequired: function() {}
    },
    ProgressBarAndroid: function() {},
    ProgressViewIOS: {
        displayName: {},
        propTypes: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityLabel: {
                isRequired: function() {}
            },
            accessibilityLiveRegion: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessibilityViewIsModal: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            collapsable: {
                isRequired: function() {}
            },
            hitSlop: {
                isRequired: function() {}
            },
            importantForAccessibility: {
                isRequired: function() {}
            },
            nativeID: {
                isRequired: function() {}
            },
            needsOffscreenAlphaCompositing: {
                isRequired: function() {}
            },
            onAccessibilityTap: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onMagicTap: {
                isRequired: function() {}
            },
            onMoveShouldSetResponder: {
                isRequired: function() {}
            },
            onMoveShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onResponderGrant: {
                isRequired: function() {}
            },
            onResponderMove: {
                isRequired: function() {}
            },
            onResponderReject: {
                isRequired: function() {}
            },
            onResponderRelease: {
                isRequired: function() {}
            },
            onResponderTerminate: {
                isRequired: function() {}
            },
            onResponderTerminationRequest: {
                isRequired: function() {}
            },
            onStartShouldSetResponder: {
                isRequired: function() {}
            },
            onStartShouldSetResponderCapture: {
                isRequired: function() {}
            },
            pointerEvents: {
                isRequired: function() {}
            },
            progress: {
                isRequired: function() {}
            },
            progressImage: {
                isRequired: function() {}
            },
            progressTintColor: {
                isRequired: function() {}
            },
            progressViewStyle: {
                isRequired: function() {}
            },
            removeClippedSubviews: {
                isRequired: function() {}
            },
            renderToHardwareTextureAndroid: {
                isRequired: function() {}
            },
            shouldRasterizeIOS: {
                isRequired: function() {}
            },
            style: function() {},
            testID: {
                isRequired: function() {}
            },
            trackImage: {
                isRequired: function() {}
            },
            trackTintColor: {
                isRequired: function() {}
            }
        }
    },
    PushNotificationIOS: {},
    RefreshControl: {
        SIZE: {},
        displayName: {},
        propTypes: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityLabel: {
                isRequired: function() {}
            },
            accessibilityLiveRegion: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessibilityViewIsModal: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            collapsable: {
                isRequired: function() {}
            },
            colors: {
                isRequired: function() {}
            },
            enabled: {
                isRequired: function() {}
            },
            hitSlop: {
                isRequired: function() {}
            },
            importantForAccessibility: {
                isRequired: function() {}
            },
            nativeID: {
                isRequired: function() {}
            },
            needsOffscreenAlphaCompositing: {
                isRequired: function() {}
            },
            onAccessibilityTap: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onMagicTap: {
                isRequired: function() {}
            },
            onMoveShouldSetResponder: {
                isRequired: function() {}
            },
            onMoveShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onRefresh: {
                isRequired: function() {}
            },
            onResponderGrant: {
                isRequired: function() {}
            },
            onResponderMove: {
                isRequired: function() {}
            },
            onResponderReject: {
                isRequired: function() {}
            },
            onResponderRelease: {
                isRequired: function() {}
            },
            onResponderTerminate: {
                isRequired: function() {}
            },
            onResponderTerminationRequest: {
                isRequired: function() {}
            },
            onStartShouldSetResponder: {
                isRequired: function() {}
            },
            onStartShouldSetResponderCapture: {
                isRequired: function() {}
            },
            pointerEvents: {
                isRequired: function() {}
            },
            progressBackgroundColor: {
                isRequired: function() {}
            },
            progressViewOffset: {
                isRequired: function() {}
            },
            refreshing: function() {},
            removeClippedSubviews: {
                isRequired: function() {}
            },
            renderToHardwareTextureAndroid: {
                isRequired: function() {}
            },
            shouldRasterizeIOS: {
                isRequired: function() {}
            },
            size: {
                isRequired: function() {}
            },
            style: function() {},
            testID: {
                isRequired: function() {}
            },
            tintColor: {
                isRequired: function() {}
            },
            title: {
                isRequired: function() {}
            },
            titleColor: {
                isRequired: function() {}
            }
        }
    },
    ScrollView: {
        displayName: {},
        propTypes: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityLabel: {
                isRequired: function() {}
            },
            accessibilityLiveRegion: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessibilityViewIsModal: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            alwaysBounceHorizontal: {
                isRequired: function() {}
            },
            alwaysBounceVertical: {
                isRequired: function() {}
            },
            automaticallyAdjustContentInsets: {
                isRequired: function() {}
            },
            bounces: {
                isRequired: function() {}
            },
            bouncesZoom: {
                isRequired: function() {}
            },
            canCancelContentTouches: {
                isRequired: function() {}
            },
            centerContent: {
                isRequired: function() {}
            },
            collapsable: {
                isRequired: function() {}
            },
            contentContainerStyle: function() {},
            contentInset: {
                isRequired: function() {}
            },
            contentOffset: {
                isRequired: function() {}
            },
            decelerationRate: {
                isRequired: function() {}
            },
            directionalLockEnabled: {
                isRequired: function() {}
            },
            endFillColor: {
                isRequired: function() {}
            },
            hitSlop: {
                isRequired: function() {}
            },
            horizontal: {
                isRequired: function() {}
            },
            importantForAccessibility: {
                isRequired: function() {}
            },
            indicatorStyle: {
                isRequired: function() {}
            },
            keyboardDismissMode: {
                isRequired: function() {}
            },
            keyboardShouldPersistTaps: {
                isRequired: function() {}
            },
            maximumZoomScale: {
                isRequired: function() {}
            },
            minimumZoomScale: {
                isRequired: function() {}
            },
            nativeID: {
                isRequired: function() {}
            },
            needsOffscreenAlphaCompositing: {
                isRequired: function() {}
            },
            onAccessibilityTap: {
                isRequired: function() {}
            },
            onContentSizeChange: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onMagicTap: {
                isRequired: function() {}
            },
            onMoveShouldSetResponder: {
                isRequired: function() {}
            },
            onMoveShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onResponderGrant: {
                isRequired: function() {}
            },
            onResponderMove: {
                isRequired: function() {}
            },
            onResponderReject: {
                isRequired: function() {}
            },
            onResponderRelease: {
                isRequired: function() {}
            },
            onResponderTerminate: {
                isRequired: function() {}
            },
            onResponderTerminationRequest: {
                isRequired: function() {}
            },
            onScroll: {
                isRequired: function() {}
            },
            onScrollAnimationEnd: {
                isRequired: function() {}
            },
            onStartShouldSetResponder: {
                isRequired: function() {}
            },
            onStartShouldSetResponderCapture: {
                isRequired: function() {}
            },
            overScrollMode: {
                isRequired: function() {}
            },
            pagingEnabled: {
                isRequired: function() {}
            },
            pointerEvents: {
                isRequired: function() {}
            },
            refreshControl: {
                isRequired: function() {}
            },
            removeClippedSubviews: {
                isRequired: function() {}
            },
            renderToHardwareTextureAndroid: {
                isRequired: function() {}
            },
            scrollEnabled: {
                isRequired: function() {}
            },
            scrollEventThrottle: {
                isRequired: function() {}
            },
            scrollIndicatorInsets: {
                isRequired: function() {}
            },
            scrollPerfTag: {
                isRequired: function() {}
            },
            scrollsToTop: {
                isRequired: function() {}
            },
            shouldRasterizeIOS: {
                isRequired: function() {}
            },
            showsHorizontalScrollIndicator: {
                isRequired: function() {}
            },
            showsVerticalScrollIndicator: {
                isRequired: function() {}
            },
            snapToAlignment: {
                isRequired: function() {}
            },
            snapToInterval: {
                isRequired: function() {}
            },
            stickyHeaderIndices: {
                isRequired: function() {}
            },
            style: function() {},
            testID: {
                isRequired: function() {}
            },
            zoomScale: {
                isRequired: function() {}
            }
        }
    },
    SectionList: {
        defaultProps: {
            data: {},
            disableVirtualization: {},
            horizontal: {},
            initialNumToRender: {},
            keyExtractor: function() {},
            maxToRenderPerBatch: {},
            onEndReachedThreshold: {},
            renderScrollComponent: function() {},
            scrollEventThrottle: {},
            stickySectionHeadersEnabled: {},
            updateCellsBatchingPeriod: {},
            windowSize: {}
        }
    },
    SegmentedControlIOS: {
        defaultProps: {
            enabled: {},
            values: {}
        },
        displayName: {},
        getDefaultProps: {
            isReactClassApproved: {}
        },
        propTypes: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityLabel: {
                isRequired: function() {}
            },
            accessibilityLiveRegion: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessibilityViewIsModal: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            collapsable: {
                isRequired: function() {}
            },
            enabled: {
                isRequired: function() {}
            },
            hitSlop: {
                isRequired: function() {}
            },
            importantForAccessibility: {
                isRequired: function() {}
            },
            momentary: {
                isRequired: function() {}
            },
            nativeID: {
                isRequired: function() {}
            },
            needsOffscreenAlphaCompositing: {
                isRequired: function() {}
            },
            onAccessibilityTap: {
                isRequired: function() {}
            },
            onChange: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onMagicTap: {
                isRequired: function() {}
            },
            onMoveShouldSetResponder: {
                isRequired: function() {}
            },
            onMoveShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onResponderGrant: {
                isRequired: function() {}
            },
            onResponderMove: {
                isRequired: function() {}
            },
            onResponderReject: {
                isRequired: function() {}
            },
            onResponderRelease: {
                isRequired: function() {}
            },
            onResponderTerminate: {
                isRequired: function() {}
            },
            onResponderTerminationRequest: {
                isRequired: function() {}
            },
            onStartShouldSetResponder: {
                isRequired: function() {}
            },
            onStartShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onValueChange: {
                isRequired: function() {}
            },
            pointerEvents: {
                isRequired: function() {}
            },
            removeClippedSubviews: {
                isRequired: function() {}
            },
            renderToHardwareTextureAndroid: {
                isRequired: function() {}
            },
            selectedIndex: {
                isRequired: function() {}
            },
            shouldRasterizeIOS: {
                isRequired: function() {}
            },
            style: function() {},
            testID: {
                isRequired: function() {}
            },
            tintColor: {
                isRequired: function() {}
            },
            values: {
                isRequired: function() {}
            }
        }
    },
    Settings: {
        _sendObservations: function() {},
        _settings: {
            AddingEmojiKeybordHandled: {},
            AppleITunesStoreItemKinds: {},
            AppleKeyboards: {},
            AppleKeyboardsExpanded: {},
            AppleLanguages: {},
            AppleLocale: {},
            ApplePasscodeKeyboards: {},
            NSInterfaceStyle: {},
            NSLanguages: {},
            PKKeychainVersionKey: {},
            RCTDevMenu: {
                isDebuggingRemotely: {},
                shakeToShow: {},
                showInspector: {}
            },
            RCT_enableDev: {},
            RCT_enableLiveReload: {},
            RCT_enableMinification: {}
        },
        clearWatch: function() {},
        get: function() {},
        set: function() {},
        watchKeys: function() {}
    },
    Share: function() {},
    Slider: {
        defaultProps: {
            disabled: {},
            maximumValue: {},
            minimumValue: {},
            step: {},
            value: {}
        },
        displayName: {},
        getDefaultProps: {
            isReactClassApproved: {}
        },
        propTypes: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityLabel: {
                isRequired: function() {}
            },
            accessibilityLiveRegion: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessibilityViewIsModal: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            collapsable: {
                isRequired: function() {}
            },
            disabled: {
                isRequired: function() {}
            },
            hitSlop: {
                isRequired: function() {}
            },
            importantForAccessibility: {
                isRequired: function() {}
            },
            maximumTrackImage: {
                isRequired: function() {}
            },
            maximumTrackTintColor: {
                isRequired: function() {}
            },
            maximumValue: {
                isRequired: function() {}
            },
            minimumTrackImage: {
                isRequired: function() {}
            },
            minimumTrackTintColor: {
                isRequired: function() {}
            },
            minimumValue: {
                isRequired: function() {}
            },
            nativeID: {
                isRequired: function() {}
            },
            needsOffscreenAlphaCompositing: {
                isRequired: function() {}
            },
            onAccessibilityTap: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onMagicTap: {
                isRequired: function() {}
            },
            onMoveShouldSetResponder: {
                isRequired: function() {}
            },
            onMoveShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onResponderGrant: {
                isRequired: function() {}
            },
            onResponderMove: {
                isRequired: function() {}
            },
            onResponderReject: {
                isRequired: function() {}
            },
            onResponderRelease: {
                isRequired: function() {}
            },
            onResponderTerminate: {
                isRequired: function() {}
            },
            onResponderTerminationRequest: {
                isRequired: function() {}
            },
            onSlidingComplete: {
                isRequired: function() {}
            },
            onStartShouldSetResponder: {
                isRequired: function() {}
            },
            onStartShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onValueChange: {
                isRequired: function() {}
            },
            pointerEvents: {
                isRequired: function() {}
            },
            removeClippedSubviews: {
                isRequired: function() {}
            },
            renderToHardwareTextureAndroid: {
                isRequired: function() {}
            },
            shouldRasterizeIOS: {
                isRequired: function() {}
            },
            step: {
                isRequired: function() {}
            },
            style: function() {},
            testID: {
                isRequired: function() {}
            },
            thumbImage: {
                isRequired: function() {}
            },
            thumbTintColor: {
                isRequired: function() {}
            },
            trackImage: {
                isRequired: function() {}
            },
            value: {
                isRequired: function() {}
            }
        }
    },
    SnapshotViewIOS: {
        propTypes: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityLabel: {
                isRequired: function() {}
            },
            accessibilityLiveRegion: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessibilityViewIsModal: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            collapsable: {
                isRequired: function() {}
            },
            hitSlop: {
                isRequired: function() {}
            },
            importantForAccessibility: {
                isRequired: function() {}
            },
            nativeID: {
                isRequired: function() {}
            },
            needsOffscreenAlphaCompositing: {
                isRequired: function() {}
            },
            onAccessibilityTap: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onMagicTap: {
                isRequired: function() {}
            },
            onMoveShouldSetResponder: {
                isRequired: function() {}
            },
            onMoveShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onResponderGrant: {
                isRequired: function() {}
            },
            onResponderMove: {
                isRequired: function() {}
            },
            onResponderReject: {
                isRequired: function() {}
            },
            onResponderRelease: {
                isRequired: function() {}
            },
            onResponderTerminate: {
                isRequired: function() {}
            },
            onResponderTerminationRequest: {
                isRequired: function() {}
            },
            onSnapshotReady: {
                isRequired: function() {}
            },
            onStartShouldSetResponder: {
                isRequired: function() {}
            },
            onStartShouldSetResponderCapture: {
                isRequired: function() {}
            },
            pointerEvents: {
                isRequired: function() {}
            },
            removeClippedSubviews: {
                isRequired: function() {}
            },
            renderToHardwareTextureAndroid: {
                isRequired: function() {}
            },
            shouldRasterizeIOS: {
                isRequired: function() {}
            },
            style: function() {},
            testID: {
                isRequired: function() {}
            },
            testIdentifier: {
                isRequired: function() {}
            }
        }
    },
    StatusBar: {
        _currentValues: {},
        _defaultProps: {
            backgroundColor: {
                animated: {},
                value: {}
            },
            barStyle: {
                animated: {},
                value: {}
            },
            hidden: {
                animated: {},
                transition: {},
                value: {}
            },
            networkActivityIndicatorVisible: {},
            translucent: {}
        },
        _propsStack: {},
        _updateImmediate: {},
        currentHeight: {},
        defaultProps: {
            animated: {},
            showHideTransition: {}
        },
        propTypes: {
            animated: {
                isRequired: function() {}
            },
            backgroundColor: {
                isRequired: function() {}
            },
            barStyle: {
                isRequired: function() {}
            },
            hidden: {
                isRequired: function() {}
            },
            networkActivityIndicatorVisible: {
                isRequired: function() {}
            },
            showHideTransition: {
                isRequired: function() {}
            },
            translucent: {
                isRequired: function() {}
            }
        }
    },
    StatusBarIOS: {
        _nativeModule: {
            addListener: {
                type: {}
            },
            getHeight: {
                type: {}
            },
            removeListeners: {
                type: {}
            },
            setHidden: {
                type: {}
            },
            setNetworkActivityIndicatorVisible: {
                type: {}
            },
            setStyle: {
                type: {}
            }
        },
        _subscriber: {
            _currentSubscription: {},
            _subscriptionsForType: {
                appStateDidChange: {},
                collectBugExtraData: {},
                didCompleteNetworkResponse: {},
                didReceiveNetworkData: {},
                didReceiveNetworkDataProgress: {},
                didReceiveNetworkIncrementalData: {},
                didReceiveNetworkResponse: {},
                didSendNetworkData: {},
                didUpdateDimensions: {},
                settingsUpdated: {},
                toggleElementInspector: {},
                websocketClosed: {},
                websocketFailed: {},
                websocketMessage: {},
                websocketOpen: {}
            }
        }
    },
    StyleSheet: {
        absoluteFill: {},
        absoluteFillObject: {
            bottom: {},
            left: {},
            position: {},
            right: {},
            top: {}
        },
        create: function() {},
        flatten: function() {},
        hairlineWidth: {},
        setStyleAttributePreprocessor: function() {}
    },
    SwipeableListView: {
        defaultProps: {
            bounceFirstRowOnMount: {},
            renderQuickActions: function() {}
        },
        propTypes: {
            bounceFirstRowOnMount: function() {},
            dataSource: function() {},
            maxSwipeDistance: function() {},
            renderQuickActions: function() {},
            renderRow: function() {}
        }
    },
    Switch: {
        defaultProps: {
            disabled: {},
            value: {}
        },
        displayName: {},
        getDefaultProps: {
            isReactClassApproved: {}
        },
        propTypes: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityLabel: {
                isRequired: function() {}
            },
            accessibilityLiveRegion: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessibilityViewIsModal: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            collapsable: {
                isRequired: function() {}
            },
            disabled: {
                isRequired: function() {}
            },
            hitSlop: {
                isRequired: function() {}
            },
            importantForAccessibility: {
                isRequired: function() {}
            },
            nativeID: {
                isRequired: function() {}
            },
            needsOffscreenAlphaCompositing: {
                isRequired: function() {}
            },
            onAccessibilityTap: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onMagicTap: {
                isRequired: function() {}
            },
            onMoveShouldSetResponder: {
                isRequired: function() {}
            },
            onMoveShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onResponderGrant: {
                isRequired: function() {}
            },
            onResponderMove: {
                isRequired: function() {}
            },
            onResponderReject: {
                isRequired: function() {}
            },
            onResponderRelease: {
                isRequired: function() {}
            },
            onResponderTerminate: {
                isRequired: function() {}
            },
            onResponderTerminationRequest: {
                isRequired: function() {}
            },
            onStartShouldSetResponder: {
                isRequired: function() {}
            },
            onStartShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onTintColor: {
                isRequired: function() {}
            },
            onValueChange: {
                isRequired: function() {}
            },
            pointerEvents: {
                isRequired: function() {}
            },
            removeClippedSubviews: {
                isRequired: function() {}
            },
            renderToHardwareTextureAndroid: {
                isRequired: function() {}
            },
            shouldRasterizeIOS: {
                isRequired: function() {}
            },
            style: function() {},
            testID: {
                isRequired: function() {}
            },
            thumbTintColor: {
                isRequired: function() {}
            },
            tintColor: {
                isRequired: function() {}
            },
            value: {
                isRequired: function() {}
            }
        }
    },
    Systrace: {
        attachToRelayProfiler: function() {},
        beginAsyncEvent: function() {},
        beginEvent: function() {},
        counterEvent: function() {},
        endAsyncEvent: function() {},
        endEvent: function() {},
        isEnabled: function() {},
        measure: function() {},
        measureMethods: function() {},
        setEnabled: function() {},
        swizzleJSON: function() {}
    },
    TVEventHandler: function() {},
    TabBarIOS: {
        Item: {
            propTypes: {
                accessibilityComponentType: {
                    isRequired: function() {}
                },
                accessibilityLabel: {
                    isRequired: function() {}
                },
                accessibilityLiveRegion: {
                    isRequired: function() {}
                },
                accessibilityTraits: {
                    isRequired: function() {}
                },
                accessibilityViewIsModal: {
                    isRequired: function() {}
                },
                accessible: {
                    isRequired: function() {}
                },
                badge: {
                    isRequired: function() {}
                },
                badgeColor: {
                    isRequired: function() {}
                },
                collapsable: {
                    isRequired: function() {}
                },
                hitSlop: {
                    isRequired: function() {}
                },
                icon: {
                    isRequired: function() {}
                },
                importantForAccessibility: {
                    isRequired: function() {}
                },
                isTVSelectable: {
                    isRequired: function() {}
                },
                nativeID: {
                    isRequired: function() {}
                },
                needsOffscreenAlphaCompositing: {
                    isRequired: function() {}
                },
                onAccessibilityTap: {
                    isRequired: function() {}
                },
                onLayout: {
                    isRequired: function() {}
                },
                onMagicTap: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponder: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                onPress: {
                    isRequired: function() {}
                },
                onResponderGrant: {
                    isRequired: function() {}
                },
                onResponderMove: {
                    isRequired: function() {}
                },
                onResponderReject: {
                    isRequired: function() {}
                },
                onResponderRelease: {
                    isRequired: function() {}
                },
                onResponderTerminate: {
                    isRequired: function() {}
                },
                onResponderTerminationRequest: {
                    isRequired: function() {}
                },
                onStartShouldSetResponder: {
                    isRequired: function() {}
                },
                onStartShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                pointerEvents: {
                    isRequired: function() {}
                },
                removeClippedSubviews: {
                    isRequired: function() {}
                },
                renderAsOriginal: {
                    isRequired: function() {}
                },
                renderToHardwareTextureAndroid: {
                    isRequired: function() {}
                },
                selected: {
                    isRequired: function() {}
                },
                selectedIcon: {
                    isRequired: function() {}
                },
                shouldRasterizeIOS: {
                    isRequired: function() {}
                },
                style: function() {},
                systemIcon: {
                    isRequired: function() {}
                },
                testID: {
                    isRequired: function() {}
                },
                title: {
                    isRequired: function() {}
                }
            }
        },
        propTypes: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityLabel: {
                isRequired: function() {}
            },
            accessibilityLiveRegion: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessibilityViewIsModal: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            barTintColor: {
                isRequired: function() {}
            },
            collapsable: {
                isRequired: function() {}
            },
            hitSlop: {
                isRequired: function() {}
            },
            importantForAccessibility: {
                isRequired: function() {}
            },
            itemPositioning: {
                isRequired: function() {}
            },
            nativeID: {
                isRequired: function() {}
            },
            needsOffscreenAlphaCompositing: {
                isRequired: function() {}
            },
            onAccessibilityTap: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onMagicTap: {
                isRequired: function() {}
            },
            onMoveShouldSetResponder: {
                isRequired: function() {}
            },
            onMoveShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onResponderGrant: {
                isRequired: function() {}
            },
            onResponderMove: {
                isRequired: function() {}
            },
            onResponderReject: {
                isRequired: function() {}
            },
            onResponderRelease: {
                isRequired: function() {}
            },
            onResponderTerminate: {
                isRequired: function() {}
            },
            onResponderTerminationRequest: {
                isRequired: function() {}
            },
            onStartShouldSetResponder: {
                isRequired: function() {}
            },
            onStartShouldSetResponderCapture: {
                isRequired: function() {}
            },
            pointerEvents: {
                isRequired: function() {}
            },
            removeClippedSubviews: {
                isRequired: function() {}
            },
            renderToHardwareTextureAndroid: {
                isRequired: function() {}
            },
            shouldRasterizeIOS: {
                isRequired: function() {}
            },
            style: function() {},
            testID: {
                isRequired: function() {}
            },
            tintColor: {
                isRequired: function() {}
            },
            translucent: {
                isRequired: function() {}
            },
            unselectedItemTintColor: {
                isRequired: function() {}
            },
            unselectedTintColor: {
                isRequired: function() {}
            }
        }
    },
    Text: {
        childContextTypes: {
            isInAParentText: {
                isRequired: function() {}
            }
        },
        contextTypes: {
            isInAParentText: {
                isRequired: function() {}
            }
        },
        defaultProps: {
            accessible: {},
            allowFontScaling: {},
            disabled: {},
            ellipsizeMode: {}
        },
        displayName: {},
        getDefaultProps: {
            isReactClassApproved: {}
        },
        propTypes: {
            accessible: {
                isRequired: function() {}
            },
            adjustsFontSizeToFit: {
                isRequired: function() {}
            },
            allowFontScaling: {
                isRequired: function() {}
            },
            disabled: {
                isRequired: function() {}
            },
            ellipsizeMode: {
                isRequired: function() {}
            },
            minimumFontScale: {
                isRequired: function() {}
            },
            nativeID: {
                isRequired: function() {}
            },
            numberOfLines: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onLongPress: {
                isRequired: function() {}
            },
            onPress: {
                isRequired: function() {}
            },
            pressRetentionOffset: {
                isRequired: function() {}
            },
            selectable: {
                isRequired: function() {}
            },
            selectionColor: {
                isRequired: function() {}
            },
            style: function() {},
            suppressHighlighting: {
                isRequired: function() {}
            },
            testID: {
                isRequired: function() {}
            },
            textBreakStrategy: {
                isRequired: function() {}
            }
        }
    },
    TextInput: {
        State: {
            _currentlyFocusedID: {},
            blurTextInput: function() {},
            currentlyFocusedField: function() {},
            focusTextInput: function() {}
        },
        childContextTypes: {
            isInAParentText: {
                isRequired: function() {}
            }
        },
        contextTypes: {
            focusEmitter: {
                isRequired: function() {}
            },
            onFocusRequested: {
                isRequired: function() {}
            }
        },
        displayName: {},
        propTypes: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityLabel: {
                isRequired: function() {}
            },
            accessibilityLiveRegion: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessibilityViewIsModal: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            autoCapitalize: {
                isRequired: function() {}
            },
            autoCorrect: {
                isRequired: function() {}
            },
            autoFocus: {
                isRequired: function() {}
            },
            blurOnSubmit: {
                isRequired: function() {}
            },
            caretHidden: {
                isRequired: function() {}
            },
            clearButtonMode: {
                isRequired: function() {}
            },
            clearTextOnFocus: {
                isRequired: function() {}
            },
            collapsable: {
                isRequired: function() {}
            },
            dataDetectorTypes: {
                isRequired: function() {}
            },
            defaultValue: {
                isRequired: function() {}
            },
            disableFullscreenUI: {
                isRequired: function() {}
            },
            editable: {
                isRequired: function() {}
            },
            enablesReturnKeyAutomatically: {
                isRequired: function() {}
            },
            hitSlop: {
                isRequired: function() {}
            },
            importantForAccessibility: {
                isRequired: function() {}
            },
            inlineImageLeft: {
                isRequired: function() {}
            },
            inlineImagePadding: {
                isRequired: function() {}
            },
            keyboardAppearance: {
                isRequired: function() {}
            },
            keyboardType: {
                isRequired: function() {}
            },
            maxLength: {
                isRequired: function() {}
            },
            multiline: {
                isRequired: function() {}
            },
            nativeID: {
                isRequired: function() {}
            },
            needsOffscreenAlphaCompositing: {
                isRequired: function() {}
            },
            numberOfLines: {
                isRequired: function() {}
            },
            onAccessibilityTap: {
                isRequired: function() {}
            },
            onBlur: {
                isRequired: function() {}
            },
            onChange: {
                isRequired: function() {}
            },
            onChangeText: {
                isRequired: function() {}
            },
            onContentSizeChange: {
                isRequired: function() {}
            },
            onEndEditing: {
                isRequired: function() {}
            },
            onFocus: {
                isRequired: function() {}
            },
            onKeyPress: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onMagicTap: {
                isRequired: function() {}
            },
            onMoveShouldSetResponder: {
                isRequired: function() {}
            },
            onMoveShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onResponderGrant: {
                isRequired: function() {}
            },
            onResponderMove: {
                isRequired: function() {}
            },
            onResponderReject: {
                isRequired: function() {}
            },
            onResponderRelease: {
                isRequired: function() {}
            },
            onResponderTerminate: {
                isRequired: function() {}
            },
            onResponderTerminationRequest: {
                isRequired: function() {}
            },
            onScroll: {
                isRequired: function() {}
            },
            onSelectionChange: {
                isRequired: function() {}
            },
            onStartShouldSetResponder: {
                isRequired: function() {}
            },
            onStartShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onSubmitEditing: {
                isRequired: function() {}
            },
            placeholder: {
                isRequired: function() {}
            },
            placeholderTextColor: {
                isRequired: function() {}
            },
            pointerEvents: {
                isRequired: function() {}
            },
            removeClippedSubviews: {
                isRequired: function() {}
            },
            renderToHardwareTextureAndroid: {
                isRequired: function() {}
            },
            returnKeyLabel: {
                isRequired: function() {}
            },
            returnKeyType: {
                isRequired: function() {}
            },
            secureTextEntry: {
                isRequired: function() {}
            },
            selectTextOnFocus: {
                isRequired: function() {}
            },
            selection: {
                isRequired: function() {}
            },
            selectionColor: {
                isRequired: function() {}
            },
            selectionState: {
                isRequired: function() {}
            },
            shouldRasterizeIOS: {
                isRequired: function() {}
            },
            spellCheck: {
                isRequired: function() {}
            },
            style: function() {},
            testID: {
                isRequired: function() {}
            },
            textBreakStrategy: {
                isRequired: function() {}
            },
            underlineColorAndroid: {
                isRequired: function() {}
            },
            value: {
                isRequired: function() {}
            }
        }
    },
    TimePickerAndroid: {
        open: function() {}
    },
    ToastAndroid: {
        show: function() {}
    },
    ToolbarAndroid: function() {},
    Touchable: {
        Mixin: {
            _cancelLongPressDelayTimeout: function() {},
            _endHighlight: function() {},
            _getDistanceBetweenPoints: function() {},
            _handleDelay: function() {},
            _handleLongDelay: function() {},
            _handleQueryLayout: function() {},
            _isHighlight: function() {},
            _performSideEffectsForTransition: function() {},
            _receiveSignal: function() {},
            _remeasureMetricsOnActivation: function() {},
            _savePressInLocation: function() {},
            _startHighlight: function() {},
            componentDidMount: function() {},
            componentWillUnmount: function() {},
            touchableGetInitialState: function() {},
            touchableHandleResponderGrant: function() {},
            touchableHandleResponderMove: function() {},
            touchableHandleResponderRelease: function() {},
            touchableHandleResponderTerminate: function() {},
            touchableHandleResponderTerminationRequest: function() {},
            touchableHandleStartShouldSetResponder: function() {},
            touchableLongPressCancelsPress: function() {}
        },
        TOUCH_TARGET_DEBUG: {},
        renderDebugView: function() {}
    },
    TouchableHighlight: {
        defaultProps: {
            activeOpacity: {},
            underlayColor: {}
        },
        displayName: {},
        getDefaultProps: {
            isReactClassApproved: {}
        },
        propTypes: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            activeOpacity: {
                isRequired: function() {}
            },
            delayLongPress: {
                isRequired: function() {}
            },
            delayPressIn: {
                isRequired: function() {}
            },
            delayPressOut: {
                isRequired: function() {}
            },
            disabled: {
                isRequired: function() {}
            },
            hasTVPreferredFocus: {
                isRequired: function() {}
            },
            hitSlop: {
                isRequired: function() {}
            },
            onHideUnderlay: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onLongPress: {
                isRequired: function() {}
            },
            onPress: {
                isRequired: function() {}
            },
            onPressIn: {
                isRequired: function() {}
            },
            onPressOut: {
                isRequired: function() {}
            },
            onShowUnderlay: {
                isRequired: function() {}
            },
            pressRetentionOffset: {
                isRequired: function() {}
            },
            style: function() {},
            tvParallaxProperties: {
                isRequired: function() {}
            },
            underlayColor: {
                isRequired: function() {}
            }
        }
    },
    TouchableNativeFeedback: function() {},
    TouchableOpacity: {
        defaultProps: {
            activeOpacity: {},
            focusedOpacity: {}
        },
        displayName: {},
        getDefaultProps: {
            isReactClassApproved: {}
        },
        propTypes: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            activeOpacity: {
                isRequired: function() {}
            },
            delayLongPress: {
                isRequired: function() {}
            },
            delayPressIn: {
                isRequired: function() {}
            },
            delayPressOut: {
                isRequired: function() {}
            },
            disabled: {
                isRequired: function() {}
            },
            focusedOpacity: {
                isRequired: function() {}
            },
            hitSlop: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onLongPress: {
                isRequired: function() {}
            },
            onPress: {
                isRequired: function() {}
            },
            onPressIn: {
                isRequired: function() {}
            },
            onPressOut: {
                isRequired: function() {}
            },
            pressRetentionOffset: {
                isRequired: function() {}
            },
            tvParallaxProperties: {
                isRequired: function() {}
            }
        }
    },
    TouchableWithoutFeedback: {
        displayName: {},
        propTypes: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            delayLongPress: {
                isRequired: function() {}
            },
            delayPressIn: {
                isRequired: function() {}
            },
            delayPressOut: {
                isRequired: function() {}
            },
            disabled: {
                isRequired: function() {}
            },
            hitSlop: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onLongPress: {
                isRequired: function() {}
            },
            onPress: {
                isRequired: function() {}
            },
            onPressIn: {
                isRequired: function() {}
            },
            onPressOut: {
                isRequired: function() {}
            },
            pressRetentionOffset: {
                isRequired: function() {}
            }
        }
    },
    UIManager: {
        RCTActivityIndicatorView: {
            Commands: {},
            Constants: {},
            Manager: {},
            NativeProps: {
                animating: {},
                color: {},
                hidesWhenStopped: {},
                size: {}
            },
            propTypes: {
                accessibilityComponentType: {
                    isRequired: function() {}
                },
                accessibilityLabel: {
                    isRequired: function() {}
                },
                accessibilityLiveRegion: {
                    isRequired: function() {}
                },
                accessibilityTraits: {
                    isRequired: function() {}
                },
                accessibilityViewIsModal: {
                    isRequired: function() {}
                },
                accessible: {
                    isRequired: function() {}
                },
                animating: {
                    isRequired: function() {}
                },
                collapsable: {
                    isRequired: function() {}
                },
                color: {
                    isRequired: function() {}
                },
                hidesWhenStopped: {
                    isRequired: function() {}
                },
                hitSlop: {
                    isRequired: function() {}
                },
                importantForAccessibility: {
                    isRequired: function() {}
                },
                nativeID: {
                    isRequired: function() {}
                },
                needsOffscreenAlphaCompositing: {
                    isRequired: function() {}
                },
                onAccessibilityTap: {
                    isRequired: function() {}
                },
                onLayout: {
                    isRequired: function() {}
                },
                onMagicTap: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponder: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                onResponderGrant: {
                    isRequired: function() {}
                },
                onResponderMove: {
                    isRequired: function() {}
                },
                onResponderReject: {
                    isRequired: function() {}
                },
                onResponderRelease: {
                    isRequired: function() {}
                },
                onResponderTerminate: {
                    isRequired: function() {}
                },
                onResponderTerminationRequest: {
                    isRequired: function() {}
                },
                onStartShouldSetResponder: {
                    isRequired: function() {}
                },
                onStartShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                pointerEvents: {
                    isRequired: function() {}
                },
                removeClippedSubviews: {
                    isRequired: function() {}
                },
                renderToHardwareTextureAndroid: {
                    isRequired: function() {}
                },
                shouldRasterizeIOS: {
                    isRequired: function() {}
                },
                size: {
                    isRequired: function() {}
                },
                style: function() {},
                testID: {
                    isRequired: function() {}
                }
            },
            uiViewClassName: {},
            validAttributes: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                animating: {},
                aspectRatio: {},
                backfaceVisibility: {},
                backgroundColor: {
                    process: function() {}
                },
                borderBottomColor: {
                    process: function() {}
                },
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {
                    process: function() {}
                },
                borderLeftColor: {
                    process: function() {}
                },
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {
                    process: function() {}
                },
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {
                    process: function() {}
                },
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                color: {
                    process: function() {}
                },
                direction: {},
                display: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                height: {},
                hidesWhenStopped: {},
                hitSlop: {
                    diff: function() {}
                },
                justifyContent: {},
                left: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxWidth: {},
                minHeight: {},
                minWidth: {},
                onAccessibilityTap: {},
                onLayout: {},
                onMagicTap: {},
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                pointerEvents: {},
                position: {},
                removeClippedSubviews: {},
                right: {},
                shadowColor: {
                    process: function() {}
                },
                shadowOffset: {
                    diff: function() {}
                },
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                size: {},
                style: {
                    alignContent: {},
                    alignItems: {},
                    alignSelf: {},
                    aspectRatio: {},
                    backfaceVisibility: {},
                    backgroundColor: {
                        process: function() {}
                    },
                    borderBottomColor: {
                        process: function() {}
                    },
                    borderBottomLeftRadius: {},
                    borderBottomRightRadius: {},
                    borderBottomWidth: {},
                    borderColor: {
                        process: function() {}
                    },
                    borderLeftColor: {
                        process: function() {}
                    },
                    borderLeftWidth: {},
                    borderRadius: {},
                    borderRightColor: {
                        process: function() {}
                    },
                    borderRightWidth: {},
                    borderStyle: {},
                    borderTopColor: {
                        process: function() {}
                    },
                    borderTopLeftRadius: {},
                    borderTopRightRadius: {},
                    borderTopWidth: {},
                    borderWidth: {},
                    bottom: {},
                    color: {
                        process: function() {}
                    },
                    decomposedMatrix: {},
                    direction: {},
                    display: {},
                    elevation: {},
                    flex: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexGrow: {},
                    flexShrink: {},
                    flexWrap: {},
                    fontFamily: {},
                    fontSize: {},
                    fontStyle: {},
                    fontVariant: {},
                    fontWeight: {},
                    height: {},
                    includeFontPadding: {},
                    justifyContent: {},
                    left: {},
                    letterSpacing: {},
                    lineHeight: {},
                    margin: {},
                    marginBottom: {},
                    marginHorizontal: {},
                    marginLeft: {},
                    marginRight: {},
                    marginTop: {},
                    marginVertical: {},
                    maxHeight: {},
                    maxWidth: {},
                    minHeight: {},
                    minWidth: {},
                    opacity: {},
                    overflow: {},
                    overlayColor: {
                        process: function() {}
                    },
                    padding: {},
                    paddingBottom: {},
                    paddingHorizontal: {},
                    paddingLeft: {},
                    paddingRight: {},
                    paddingTop: {},
                    paddingVertical: {},
                    position: {},
                    resizeMode: {},
                    right: {},
                    rotation: {},
                    scaleX: {},
                    scaleY: {},
                    shadowColor: {
                        process: function() {}
                    },
                    shadowOffset: {
                        diff: function() {}
                    },
                    shadowOpacity: {},
                    shadowRadius: {},
                    textAlign: {},
                    textAlignVertical: {},
                    textDecorationColor: {
                        process: function() {}
                    },
                    textDecorationLine: {},
                    textDecorationStyle: {},
                    textShadowColor: {
                        process: function() {}
                    },
                    textShadowOffset: {},
                    textShadowRadius: {},
                    tintColor: {
                        process: function() {}
                    },
                    top: {},
                    transform: {
                        process: function() {}
                    },
                    transformMatrix: {},
                    translateX: {},
                    translateY: {},
                    width: {},
                    writingDirection: {},
                    zIndex: {}
                },
                testID: {},
                top: {},
                transform: {
                    diff: function() {}
                },
                width: {},
                zIndex: {}
            }
        },
        RCTDatePicker: {
            Commands: {},
            Constants: {},
            Manager: {},
            NativeProps: {
                date: {},
                maximumDate: {},
                minimumDate: {},
                minuteInterval: {},
                mode: {},
                onChange: {},
                timeZoneOffsetInMinutes: {}
            },
            propTypes: {
                accessibilityComponentType: {
                    isRequired: function() {}
                },
                accessibilityLabel: {
                    isRequired: function() {}
                },
                accessibilityLiveRegion: {
                    isRequired: function() {}
                },
                accessibilityTraits: {
                    isRequired: function() {}
                },
                accessibilityViewIsModal: {
                    isRequired: function() {}
                },
                accessible: {
                    isRequired: function() {}
                },
                collapsable: {
                    isRequired: function() {}
                },
                date: {
                    isRequired: function() {}
                },
                hitSlop: {
                    isRequired: function() {}
                },
                importantForAccessibility: {
                    isRequired: function() {}
                },
                maximumDate: {
                    isRequired: function() {}
                },
                minimumDate: {
                    isRequired: function() {}
                },
                minuteInterval: {
                    isRequired: function() {}
                },
                mode: {
                    isRequired: function() {}
                },
                nativeID: {
                    isRequired: function() {}
                },
                needsOffscreenAlphaCompositing: {
                    isRequired: function() {}
                },
                onAccessibilityTap: {
                    isRequired: function() {}
                },
                onChange: {
                    isRequired: function() {}
                },
                onDateChange: function() {},
                onLayout: {
                    isRequired: function() {}
                },
                onMagicTap: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponder: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                onResponderGrant: {
                    isRequired: function() {}
                },
                onResponderMove: {
                    isRequired: function() {}
                },
                onResponderReject: {
                    isRequired: function() {}
                },
                onResponderRelease: {
                    isRequired: function() {}
                },
                onResponderTerminate: {
                    isRequired: function() {}
                },
                onResponderTerminationRequest: {
                    isRequired: function() {}
                },
                onStartShouldSetResponder: {
                    isRequired: function() {}
                },
                onStartShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                pointerEvents: {
                    isRequired: function() {}
                },
                removeClippedSubviews: {
                    isRequired: function() {}
                },
                renderToHardwareTextureAndroid: {
                    isRequired: function() {}
                },
                shouldRasterizeIOS: {
                    isRequired: function() {}
                },
                style: function() {},
                testID: {
                    isRequired: function() {}
                },
                timeZoneOffsetInMinutes: {
                    isRequired: function() {}
                }
            },
            uiViewClassName: {},
            validAttributes: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                aspectRatio: {},
                backfaceVisibility: {},
                backgroundColor: {
                    process: function() {}
                },
                borderBottomColor: {
                    process: function() {}
                },
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {
                    process: function() {}
                },
                borderLeftColor: {
                    process: function() {}
                },
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {
                    process: function() {}
                },
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {
                    process: function() {}
                },
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                date: {},
                direction: {},
                display: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                height: {},
                hitSlop: {
                    diff: function() {}
                },
                justifyContent: {},
                left: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxWidth: {},
                maximumDate: {},
                minHeight: {},
                minWidth: {},
                minimumDate: {},
                minuteInterval: {},
                mode: {},
                onAccessibilityTap: {},
                onChange: {},
                onLayout: {},
                onMagicTap: {},
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                pointerEvents: {},
                position: {},
                removeClippedSubviews: {},
                right: {},
                shadowColor: {
                    process: function() {}
                },
                shadowOffset: {
                    diff: function() {}
                },
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                style: {
                    alignContent: {},
                    alignItems: {},
                    alignSelf: {},
                    aspectRatio: {},
                    backfaceVisibility: {},
                    backgroundColor: {
                        process: function() {}
                    },
                    borderBottomColor: {
                        process: function() {}
                    },
                    borderBottomLeftRadius: {},
                    borderBottomRightRadius: {},
                    borderBottomWidth: {},
                    borderColor: {
                        process: function() {}
                    },
                    borderLeftColor: {
                        process: function() {}
                    },
                    borderLeftWidth: {},
                    borderRadius: {},
                    borderRightColor: {
                        process: function() {}
                    },
                    borderRightWidth: {},
                    borderStyle: {},
                    borderTopColor: {
                        process: function() {}
                    },
                    borderTopLeftRadius: {},
                    borderTopRightRadius: {},
                    borderTopWidth: {},
                    borderWidth: {},
                    bottom: {},
                    color: {
                        process: function() {}
                    },
                    decomposedMatrix: {},
                    direction: {},
                    display: {},
                    elevation: {},
                    flex: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexGrow: {},
                    flexShrink: {},
                    flexWrap: {},
                    fontFamily: {},
                    fontSize: {},
                    fontStyle: {},
                    fontVariant: {},
                    fontWeight: {},
                    height: {},
                    includeFontPadding: {},
                    justifyContent: {},
                    left: {},
                    letterSpacing: {},
                    lineHeight: {},
                    margin: {},
                    marginBottom: {},
                    marginHorizontal: {},
                    marginLeft: {},
                    marginRight: {},
                    marginTop: {},
                    marginVertical: {},
                    maxHeight: {},
                    maxWidth: {},
                    minHeight: {},
                    minWidth: {},
                    opacity: {},
                    overflow: {},
                    overlayColor: {
                        process: function() {}
                    },
                    padding: {},
                    paddingBottom: {},
                    paddingHorizontal: {},
                    paddingLeft: {},
                    paddingRight: {},
                    paddingTop: {},
                    paddingVertical: {},
                    position: {},
                    resizeMode: {},
                    right: {},
                    rotation: {},
                    scaleX: {},
                    scaleY: {},
                    shadowColor: {
                        process: function() {}
                    },
                    shadowOffset: {
                        diff: function() {}
                    },
                    shadowOpacity: {},
                    shadowRadius: {},
                    textAlign: {},
                    textAlignVertical: {},
                    textDecorationColor: {
                        process: function() {}
                    },
                    textDecorationLine: {},
                    textDecorationStyle: {},
                    textShadowColor: {
                        process: function() {}
                    },
                    textShadowOffset: {},
                    textShadowRadius: {},
                    tintColor: {
                        process: function() {}
                    },
                    top: {},
                    transform: {
                        process: function() {}
                    },
                    transformMatrix: {},
                    translateX: {},
                    translateY: {},
                    width: {},
                    writingDirection: {},
                    zIndex: {}
                },
                testID: {},
                timeZoneOffsetInMinutes: {},
                top: {},
                transform: {
                    diff: function() {}
                },
                width: {},
                zIndex: {}
            }
        },
        RCTImageView: {
            Commands: {
                getSize: {},
                prefetchImage: {}
            },
            Constants: {},
            Manager: {},
            NativeProps: {
                blurRadius: {},
                capInsets: {},
                defaultSource: {},
                onError: {},
                onLoad: {},
                onLoadEnd: {},
                onLoadStart: {},
                onPartialLoad: {},
                onProgress: {},
                resizeMode: {},
                source: {},
                tintColor: {}
            },
            propTypes: {
                accessibilityLabel: {
                    isRequired: function() {}
                },
                accessible: {
                    isRequired: function() {}
                },
                blurRadius: {
                    isRequired: function() {}
                },
                capInsets: {
                    isRequired: function() {}
                },
                defaultSource: {
                    isRequired: function() {}
                },
                onError: {
                    isRequired: function() {}
                },
                onLayout: {
                    isRequired: function() {}
                },
                onLoad: {
                    isRequired: function() {}
                },
                onLoadEnd: {
                    isRequired: function() {}
                },
                onLoadStart: {
                    isRequired: function() {}
                },
                onPartialLoad: {
                    isRequired: function() {}
                },
                onProgress: {
                    isRequired: function() {}
                },
                resizeMethod: {
                    isRequired: function() {}
                },
                resizeMode: {
                    isRequired: function() {}
                },
                source: {
                    isRequired: function() {}
                },
                style: function() {},
                testID: {
                    isRequired: function() {}
                }
            },
            uiViewClassName: {},
            validAttributes: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                aspectRatio: {},
                backfaceVisibility: {},
                backgroundColor: {
                    process: function() {}
                },
                blurRadius: {},
                borderBottomColor: {
                    process: function() {}
                },
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {
                    process: function() {}
                },
                borderLeftColor: {
                    process: function() {}
                },
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {
                    process: function() {}
                },
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {
                    process: function() {}
                },
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                capInsets: {
                    diff: function() {}
                },
                defaultSource: {
                    process: {
                        pickScale: function() {},
                        setCustomSourceTransformer: function() {}
                    }
                },
                direction: {},
                display: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                height: {},
                hitSlop: {
                    diff: function() {}
                },
                justifyContent: {},
                left: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxWidth: {},
                minHeight: {},
                minWidth: {},
                onAccessibilityTap: {},
                onError: {},
                onLayout: {},
                onLoad: {},
                onLoadEnd: {},
                onLoadStart: {},
                onMagicTap: {},
                onPartialLoad: {},
                onProgress: {},
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                pointerEvents: {},
                position: {},
                removeClippedSubviews: {},
                resizeMode: {},
                right: {},
                shadowColor: {
                    process: function() {}
                },
                shadowOffset: {
                    diff: function() {}
                },
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                source: {},
                style: {
                    alignContent: {},
                    alignItems: {},
                    alignSelf: {},
                    aspectRatio: {},
                    backfaceVisibility: {},
                    backgroundColor: {
                        process: function() {}
                    },
                    borderBottomColor: {
                        process: function() {}
                    },
                    borderBottomLeftRadius: {},
                    borderBottomRightRadius: {},
                    borderBottomWidth: {},
                    borderColor: {
                        process: function() {}
                    },
                    borderLeftColor: {
                        process: function() {}
                    },
                    borderLeftWidth: {},
                    borderRadius: {},
                    borderRightColor: {
                        process: function() {}
                    },
                    borderRightWidth: {},
                    borderStyle: {},
                    borderTopColor: {
                        process: function() {}
                    },
                    borderTopLeftRadius: {},
                    borderTopRightRadius: {},
                    borderTopWidth: {},
                    borderWidth: {},
                    bottom: {},
                    color: {
                        process: function() {}
                    },
                    decomposedMatrix: {},
                    direction: {},
                    display: {},
                    elevation: {},
                    flex: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexGrow: {},
                    flexShrink: {},
                    flexWrap: {},
                    fontFamily: {},
                    fontSize: {},
                    fontStyle: {},
                    fontVariant: {},
                    fontWeight: {},
                    height: {},
                    includeFontPadding: {},
                    justifyContent: {},
                    left: {},
                    letterSpacing: {},
                    lineHeight: {},
                    margin: {},
                    marginBottom: {},
                    marginHorizontal: {},
                    marginLeft: {},
                    marginRight: {},
                    marginTop: {},
                    marginVertical: {},
                    maxHeight: {},
                    maxWidth: {},
                    minHeight: {},
                    minWidth: {},
                    opacity: {},
                    overflow: {},
                    overlayColor: {
                        process: function() {}
                    },
                    padding: {},
                    paddingBottom: {},
                    paddingHorizontal: {},
                    paddingLeft: {},
                    paddingRight: {},
                    paddingTop: {},
                    paddingVertical: {},
                    position: {},
                    resizeMode: {},
                    right: {},
                    rotation: {},
                    scaleX: {},
                    scaleY: {},
                    shadowColor: {
                        process: function() {}
                    },
                    shadowOffset: {
                        diff: function() {}
                    },
                    shadowOpacity: {},
                    shadowRadius: {},
                    textAlign: {},
                    textAlignVertical: {},
                    textDecorationColor: {
                        process: function() {}
                    },
                    textDecorationLine: {},
                    textDecorationStyle: {},
                    textShadowColor: {
                        process: function() {}
                    },
                    textShadowOffset: {},
                    textShadowRadius: {},
                    tintColor: {
                        process: function() {}
                    },
                    top: {},
                    transform: {
                        process: function() {}
                    },
                    transformMatrix: {},
                    translateX: {},
                    translateY: {},
                    width: {},
                    writingDirection: {},
                    zIndex: {}
                },
                testID: {},
                tintColor: {
                    process: function() {}
                },
                top: {},
                transform: {
                    diff: function() {}
                },
                width: {},
                zIndex: {}
            }
        },
        RCTModalHostView: {
            Commands: {},
            Constants: {},
            Manager: {},
            NativeProps: {
                animationType: {},
                onOrientationChange: {},
                onShow: {},
                supportedOrientations: {},
                transparent: {}
            },
            propTypes: {},
            uiViewClassName: {},
            validAttributes: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                animationType: {},
                aspectRatio: {},
                backfaceVisibility: {},
                backgroundColor: {
                    process: function() {}
                },
                borderBottomColor: {
                    process: function() {}
                },
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {
                    process: function() {}
                },
                borderLeftColor: {
                    process: function() {}
                },
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {
                    process: function() {}
                },
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {
                    process: function() {}
                },
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                direction: {},
                display: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                height: {},
                hitSlop: {
                    diff: function() {}
                },
                justifyContent: {},
                left: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxWidth: {},
                minHeight: {},
                minWidth: {},
                onAccessibilityTap: {},
                onLayout: {},
                onMagicTap: {},
                onOrientationChange: {},
                onShow: {},
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                pointerEvents: {},
                position: {},
                removeClippedSubviews: {},
                right: {},
                shadowColor: {
                    process: function() {}
                },
                shadowOffset: {
                    diff: function() {}
                },
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                style: {
                    alignContent: {},
                    alignItems: {},
                    alignSelf: {},
                    aspectRatio: {},
                    backfaceVisibility: {},
                    backgroundColor: {
                        process: function() {}
                    },
                    borderBottomColor: {
                        process: function() {}
                    },
                    borderBottomLeftRadius: {},
                    borderBottomRightRadius: {},
                    borderBottomWidth: {},
                    borderColor: {
                        process: function() {}
                    },
                    borderLeftColor: {
                        process: function() {}
                    },
                    borderLeftWidth: {},
                    borderRadius: {},
                    borderRightColor: {
                        process: function() {}
                    },
                    borderRightWidth: {},
                    borderStyle: {},
                    borderTopColor: {
                        process: function() {}
                    },
                    borderTopLeftRadius: {},
                    borderTopRightRadius: {},
                    borderTopWidth: {},
                    borderWidth: {},
                    bottom: {},
                    color: {
                        process: function() {}
                    },
                    decomposedMatrix: {},
                    direction: {},
                    display: {},
                    elevation: {},
                    flex: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexGrow: {},
                    flexShrink: {},
                    flexWrap: {},
                    fontFamily: {},
                    fontSize: {},
                    fontStyle: {},
                    fontVariant: {},
                    fontWeight: {},
                    height: {},
                    includeFontPadding: {},
                    justifyContent: {},
                    left: {},
                    letterSpacing: {},
                    lineHeight: {},
                    margin: {},
                    marginBottom: {},
                    marginHorizontal: {},
                    marginLeft: {},
                    marginRight: {},
                    marginTop: {},
                    marginVertical: {},
                    maxHeight: {},
                    maxWidth: {},
                    minHeight: {},
                    minWidth: {},
                    opacity: {},
                    overflow: {},
                    overlayColor: {
                        process: function() {}
                    },
                    padding: {},
                    paddingBottom: {},
                    paddingHorizontal: {},
                    paddingLeft: {},
                    paddingRight: {},
                    paddingTop: {},
                    paddingVertical: {},
                    position: {},
                    resizeMode: {},
                    right: {},
                    rotation: {},
                    scaleX: {},
                    scaleY: {},
                    shadowColor: {
                        process: function() {}
                    },
                    shadowOffset: {
                        diff: function() {}
                    },
                    shadowOpacity: {},
                    shadowRadius: {},
                    textAlign: {},
                    textAlignVertical: {},
                    textDecorationColor: {
                        process: function() {}
                    },
                    textDecorationLine: {},
                    textDecorationStyle: {},
                    textShadowColor: {
                        process: function() {}
                    },
                    textShadowOffset: {},
                    textShadowRadius: {},
                    tintColor: {
                        process: function() {}
                    },
                    top: {},
                    transform: {
                        process: function() {}
                    },
                    transformMatrix: {},
                    translateX: {},
                    translateY: {},
                    width: {},
                    writingDirection: {},
                    zIndex: {}
                },
                supportedOrientations: {},
                testID: {},
                top: {},
                transform: {
                    diff: function() {}
                },
                transparent: {},
                width: {},
                zIndex: {}
            }
        },
        RCTNavItem: {
            Commands: {},
            Constants: {},
            Manager: {},
            NativeProps: {
                backButtonIcon: {},
                backButtonTitle: {},
                barTintColor: {},
                leftButtonIcon: {},
                leftButtonSystemIcon: {},
                leftButtonTitle: {},
                navigationBarHidden: {},
                onLeftButtonPress: {},
                onRightButtonPress: {},
                rightButtonIcon: {},
                rightButtonSystemIcon: {},
                rightButtonTitle: {},
                shadowHidden: {},
                tintColor: {},
                title: {},
                titleImage: {},
                titleTextColor: {},
                translucent: {}
            },
            propTypes: {},
            uiViewClassName: {},
            validAttributes: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                aspectRatio: {},
                backButtonIcon: {
                    process: {
                        pickScale: function() {},
                        setCustomSourceTransformer: function() {}
                    }
                },
                backButtonTitle: {},
                backfaceVisibility: {},
                backgroundColor: {
                    process: function() {}
                },
                barTintColor: {
                    process: function() {}
                },
                borderBottomColor: {
                    process: function() {}
                },
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {
                    process: function() {}
                },
                borderLeftColor: {
                    process: function() {}
                },
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {
                    process: function() {}
                },
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {
                    process: function() {}
                },
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                direction: {},
                display: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                height: {},
                hitSlop: {
                    diff: function() {}
                },
                justifyContent: {},
                left: {},
                leftButtonIcon: {
                    process: {
                        pickScale: function() {},
                        setCustomSourceTransformer: function() {}
                    }
                },
                leftButtonSystemIcon: {},
                leftButtonTitle: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxWidth: {},
                minHeight: {},
                minWidth: {},
                navigationBarHidden: {},
                onAccessibilityTap: {},
                onLayout: {},
                onLeftButtonPress: {},
                onMagicTap: {},
                onRightButtonPress: {},
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                pointerEvents: {},
                position: {},
                removeClippedSubviews: {},
                right: {},
                rightButtonIcon: {
                    process: {
                        pickScale: function() {},
                        setCustomSourceTransformer: function() {}
                    }
                },
                rightButtonSystemIcon: {},
                rightButtonTitle: {},
                shadowColor: {
                    process: function() {}
                },
                shadowHidden: {},
                shadowOffset: {
                    diff: function() {}
                },
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                style: {
                    alignContent: {},
                    alignItems: {},
                    alignSelf: {},
                    aspectRatio: {},
                    backfaceVisibility: {},
                    backgroundColor: {
                        process: function() {}
                    },
                    borderBottomColor: {
                        process: function() {}
                    },
                    borderBottomLeftRadius: {},
                    borderBottomRightRadius: {},
                    borderBottomWidth: {},
                    borderColor: {
                        process: function() {}
                    },
                    borderLeftColor: {
                        process: function() {}
                    },
                    borderLeftWidth: {},
                    borderRadius: {},
                    borderRightColor: {
                        process: function() {}
                    },
                    borderRightWidth: {},
                    borderStyle: {},
                    borderTopColor: {
                        process: function() {}
                    },
                    borderTopLeftRadius: {},
                    borderTopRightRadius: {},
                    borderTopWidth: {},
                    borderWidth: {},
                    bottom: {},
                    color: {
                        process: function() {}
                    },
                    decomposedMatrix: {},
                    direction: {},
                    display: {},
                    elevation: {},
                    flex: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexGrow: {},
                    flexShrink: {},
                    flexWrap: {},
                    fontFamily: {},
                    fontSize: {},
                    fontStyle: {},
                    fontVariant: {},
                    fontWeight: {},
                    height: {},
                    includeFontPadding: {},
                    justifyContent: {},
                    left: {},
                    letterSpacing: {},
                    lineHeight: {},
                    margin: {},
                    marginBottom: {},
                    marginHorizontal: {},
                    marginLeft: {},
                    marginRight: {},
                    marginTop: {},
                    marginVertical: {},
                    maxHeight: {},
                    maxWidth: {},
                    minHeight: {},
                    minWidth: {},
                    opacity: {},
                    overflow: {},
                    overlayColor: {
                        process: function() {}
                    },
                    padding: {},
                    paddingBottom: {},
                    paddingHorizontal: {},
                    paddingLeft: {},
                    paddingRight: {},
                    paddingTop: {},
                    paddingVertical: {},
                    position: {},
                    resizeMode: {},
                    right: {},
                    rotation: {},
                    scaleX: {},
                    scaleY: {},
                    shadowColor: {
                        process: function() {}
                    },
                    shadowOffset: {
                        diff: function() {}
                    },
                    shadowOpacity: {},
                    shadowRadius: {},
                    textAlign: {},
                    textAlignVertical: {},
                    textDecorationColor: {
                        process: function() {}
                    },
                    textDecorationLine: {},
                    textDecorationStyle: {},
                    textShadowColor: {
                        process: function() {}
                    },
                    textShadowOffset: {},
                    textShadowRadius: {},
                    tintColor: {
                        process: function() {}
                    },
                    top: {},
                    transform: {
                        process: function() {}
                    },
                    transformMatrix: {},
                    translateX: {},
                    translateY: {},
                    width: {},
                    writingDirection: {},
                    zIndex: {}
                },
                testID: {},
                tintColor: {
                    process: function() {}
                },
                title: {},
                titleImage: {
                    process: {
                        pickScale: function() {},
                        setCustomSourceTransformer: function() {}
                    }
                },
                titleTextColor: {
                    process: function() {}
                },
                top: {},
                transform: {
                    diff: function() {}
                },
                translucent: {},
                width: {},
                zIndex: {}
            }
        },
        RCTNavigator: {
            Commands: {
                requestSchedulingJavaScriptNavigation: {}
            },
            Constants: {},
            Manager: {},
            NativeProps: {
                interactivePopGestureEnabled: {},
                onNavigationComplete: {},
                onNavigationProgress: {},
                requestedTopOfStack: {}
            },
            propTypes: {},
            uiViewClassName: {},
            validAttributes: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                aspectRatio: {},
                backfaceVisibility: {},
                backgroundColor: {
                    process: function() {}
                },
                borderBottomColor: {
                    process: function() {}
                },
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {
                    process: function() {}
                },
                borderLeftColor: {
                    process: function() {}
                },
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {
                    process: function() {}
                },
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {
                    process: function() {}
                },
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                direction: {},
                display: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                height: {},
                hitSlop: {
                    diff: function() {}
                },
                interactivePopGestureEnabled: {},
                justifyContent: {},
                left: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxWidth: {},
                minHeight: {},
                minWidth: {},
                onAccessibilityTap: {},
                onLayout: {},
                onMagicTap: {},
                onNavigationComplete: {},
                onNavigationProgress: {},
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                pointerEvents: {},
                position: {},
                removeClippedSubviews: {},
                requestedTopOfStack: {},
                right: {},
                shadowColor: {
                    process: function() {}
                },
                shadowOffset: {
                    diff: function() {}
                },
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                style: {
                    alignContent: {},
                    alignItems: {},
                    alignSelf: {},
                    aspectRatio: {},
                    backfaceVisibility: {},
                    backgroundColor: {
                        process: function() {}
                    },
                    borderBottomColor: {
                        process: function() {}
                    },
                    borderBottomLeftRadius: {},
                    borderBottomRightRadius: {},
                    borderBottomWidth: {},
                    borderColor: {
                        process: function() {}
                    },
                    borderLeftColor: {
                        process: function() {}
                    },
                    borderLeftWidth: {},
                    borderRadius: {},
                    borderRightColor: {
                        process: function() {}
                    },
                    borderRightWidth: {},
                    borderStyle: {},
                    borderTopColor: {
                        process: function() {}
                    },
                    borderTopLeftRadius: {},
                    borderTopRightRadius: {},
                    borderTopWidth: {},
                    borderWidth: {},
                    bottom: {},
                    color: {
                        process: function() {}
                    },
                    decomposedMatrix: {},
                    direction: {},
                    display: {},
                    elevation: {},
                    flex: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexGrow: {},
                    flexShrink: {},
                    flexWrap: {},
                    fontFamily: {},
                    fontSize: {},
                    fontStyle: {},
                    fontVariant: {},
                    fontWeight: {},
                    height: {},
                    includeFontPadding: {},
                    justifyContent: {},
                    left: {},
                    letterSpacing: {},
                    lineHeight: {},
                    margin: {},
                    marginBottom: {},
                    marginHorizontal: {},
                    marginLeft: {},
                    marginRight: {},
                    marginTop: {},
                    marginVertical: {},
                    maxHeight: {},
                    maxWidth: {},
                    minHeight: {},
                    minWidth: {},
                    opacity: {},
                    overflow: {},
                    overlayColor: {
                        process: function() {}
                    },
                    padding: {},
                    paddingBottom: {},
                    paddingHorizontal: {},
                    paddingLeft: {},
                    paddingRight: {},
                    paddingTop: {},
                    paddingVertical: {},
                    position: {},
                    resizeMode: {},
                    right: {},
                    rotation: {},
                    scaleX: {},
                    scaleY: {},
                    shadowColor: {
                        process: function() {}
                    },
                    shadowOffset: {
                        diff: function() {}
                    },
                    shadowOpacity: {},
                    shadowRadius: {},
                    textAlign: {},
                    textAlignVertical: {},
                    textDecorationColor: {
                        process: function() {}
                    },
                    textDecorationLine: {},
                    textDecorationStyle: {},
                    textShadowColor: {
                        process: function() {}
                    },
                    textShadowOffset: {},
                    textShadowRadius: {},
                    tintColor: {
                        process: function() {}
                    },
                    top: {},
                    transform: {
                        process: function() {}
                    },
                    transformMatrix: {},
                    translateX: {},
                    translateY: {},
                    width: {},
                    writingDirection: {},
                    zIndex: {}
                },
                testID: {},
                top: {},
                transform: {
                    diff: function() {}
                },
                width: {},
                zIndex: {}
            }
        },
        RCTPicker: {
            Commands: {},
            Constants: {},
            Manager: {},
            NativeProps: {
                color: {},
                fontFamily: {},
                fontSize: {},
                fontStyle: {},
                fontWeight: {},
                items: {},
                onChange: {},
                selectedIndex: {},
                textAlign: {}
            },
            propTypes: {
                style: function() {}
            },
            uiViewClassName: {},
            validAttributes: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                aspectRatio: {},
                backfaceVisibility: {},
                backgroundColor: {
                    process: function() {}
                },
                borderBottomColor: {
                    process: function() {}
                },
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {
                    process: function() {}
                },
                borderLeftColor: {
                    process: function() {}
                },
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {
                    process: function() {}
                },
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {
                    process: function() {}
                },
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                color: {
                    process: function() {}
                },
                direction: {},
                display: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                fontFamily: {},
                fontSize: {},
                fontStyle: {},
                fontWeight: {},
                height: {},
                hitSlop: {
                    diff: function() {}
                },
                items: {},
                justifyContent: {},
                left: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxWidth: {},
                minHeight: {},
                minWidth: {},
                onAccessibilityTap: {},
                onChange: {},
                onLayout: {},
                onMagicTap: {},
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                pointerEvents: {},
                position: {},
                removeClippedSubviews: {},
                right: {},
                selectedIndex: {},
                shadowColor: {
                    process: function() {}
                },
                shadowOffset: {
                    diff: function() {}
                },
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                style: {
                    alignContent: {},
                    alignItems: {},
                    alignSelf: {},
                    aspectRatio: {},
                    backfaceVisibility: {},
                    backgroundColor: {
                        process: function() {}
                    },
                    borderBottomColor: {
                        process: function() {}
                    },
                    borderBottomLeftRadius: {},
                    borderBottomRightRadius: {},
                    borderBottomWidth: {},
                    borderColor: {
                        process: function() {}
                    },
                    borderLeftColor: {
                        process: function() {}
                    },
                    borderLeftWidth: {},
                    borderRadius: {},
                    borderRightColor: {
                        process: function() {}
                    },
                    borderRightWidth: {},
                    borderStyle: {},
                    borderTopColor: {
                        process: function() {}
                    },
                    borderTopLeftRadius: {},
                    borderTopRightRadius: {},
                    borderTopWidth: {},
                    borderWidth: {},
                    bottom: {},
                    color: {
                        process: function() {}
                    },
                    decomposedMatrix: {},
                    direction: {},
                    display: {},
                    elevation: {},
                    flex: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexGrow: {},
                    flexShrink: {},
                    flexWrap: {},
                    fontFamily: {},
                    fontSize: {},
                    fontStyle: {},
                    fontVariant: {},
                    fontWeight: {},
                    height: {},
                    includeFontPadding: {},
                    justifyContent: {},
                    left: {},
                    letterSpacing: {},
                    lineHeight: {},
                    margin: {},
                    marginBottom: {},
                    marginHorizontal: {},
                    marginLeft: {},
                    marginRight: {},
                    marginTop: {},
                    marginVertical: {},
                    maxHeight: {},
                    maxWidth: {},
                    minHeight: {},
                    minWidth: {},
                    opacity: {},
                    overflow: {},
                    overlayColor: {
                        process: function() {}
                    },
                    padding: {},
                    paddingBottom: {},
                    paddingHorizontal: {},
                    paddingLeft: {},
                    paddingRight: {},
                    paddingTop: {},
                    paddingVertical: {},
                    position: {},
                    resizeMode: {},
                    right: {},
                    rotation: {},
                    scaleX: {},
                    scaleY: {},
                    shadowColor: {
                        process: function() {}
                    },
                    shadowOffset: {
                        diff: function() {}
                    },
                    shadowOpacity: {},
                    shadowRadius: {},
                    textAlign: {},
                    textAlignVertical: {},
                    textDecorationColor: {
                        process: function() {}
                    },
                    textDecorationLine: {},
                    textDecorationStyle: {},
                    textShadowColor: {
                        process: function() {}
                    },
                    textShadowOffset: {},
                    textShadowRadius: {},
                    tintColor: {
                        process: function() {}
                    },
                    top: {},
                    transform: {
                        process: function() {}
                    },
                    transformMatrix: {},
                    translateX: {},
                    translateY: {},
                    width: {},
                    writingDirection: {},
                    zIndex: {}
                },
                testID: {},
                textAlign: {},
                top: {},
                transform: {
                    diff: function() {}
                },
                width: {},
                zIndex: {}
            }
        },
        RCTProgressView: {
            Commands: {},
            Constants: {},
            Manager: {},
            NativeProps: {
                progress: {},
                progressImage: {},
                progressTintColor: {},
                progressViewStyle: {},
                trackImage: {},
                trackTintColor: {}
            },
            propTypes: {
                accessibilityComponentType: {
                    isRequired: function() {}
                },
                accessibilityLabel: {
                    isRequired: function() {}
                },
                accessibilityLiveRegion: {
                    isRequired: function() {}
                },
                accessibilityTraits: {
                    isRequired: function() {}
                },
                accessibilityViewIsModal: {
                    isRequired: function() {}
                },
                accessible: {
                    isRequired: function() {}
                },
                collapsable: {
                    isRequired: function() {}
                },
                hitSlop: {
                    isRequired: function() {}
                },
                importantForAccessibility: {
                    isRequired: function() {}
                },
                nativeID: {
                    isRequired: function() {}
                },
                needsOffscreenAlphaCompositing: {
                    isRequired: function() {}
                },
                onAccessibilityTap: {
                    isRequired: function() {}
                },
                onLayout: {
                    isRequired: function() {}
                },
                onMagicTap: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponder: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                onResponderGrant: {
                    isRequired: function() {}
                },
                onResponderMove: {
                    isRequired: function() {}
                },
                onResponderReject: {
                    isRequired: function() {}
                },
                onResponderRelease: {
                    isRequired: function() {}
                },
                onResponderTerminate: {
                    isRequired: function() {}
                },
                onResponderTerminationRequest: {
                    isRequired: function() {}
                },
                onStartShouldSetResponder: {
                    isRequired: function() {}
                },
                onStartShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                pointerEvents: {
                    isRequired: function() {}
                },
                progress: {
                    isRequired: function() {}
                },
                progressImage: {
                    isRequired: function() {}
                },
                progressTintColor: {
                    isRequired: function() {}
                },
                progressViewStyle: {
                    isRequired: function() {}
                },
                removeClippedSubviews: {
                    isRequired: function() {}
                },
                renderToHardwareTextureAndroid: {
                    isRequired: function() {}
                },
                shouldRasterizeIOS: {
                    isRequired: function() {}
                },
                style: function() {},
                testID: {
                    isRequired: function() {}
                },
                trackImage: {
                    isRequired: function() {}
                },
                trackTintColor: {
                    isRequired: function() {}
                }
            },
            uiViewClassName: {},
            validAttributes: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                aspectRatio: {},
                backfaceVisibility: {},
                backgroundColor: {
                    process: function() {}
                },
                borderBottomColor: {
                    process: function() {}
                },
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {
                    process: function() {}
                },
                borderLeftColor: {
                    process: function() {}
                },
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {
                    process: function() {}
                },
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {
                    process: function() {}
                },
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                direction: {},
                display: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                height: {},
                hitSlop: {
                    diff: function() {}
                },
                justifyContent: {},
                left: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxWidth: {},
                minHeight: {},
                minWidth: {},
                onAccessibilityTap: {},
                onLayout: {},
                onMagicTap: {},
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                pointerEvents: {},
                position: {},
                progress: {},
                progressImage: {
                    process: {
                        pickScale: function() {},
                        setCustomSourceTransformer: function() {}
                    }
                },
                progressTintColor: {
                    process: function() {}
                },
                progressViewStyle: {},
                removeClippedSubviews: {},
                right: {},
                shadowColor: {
                    process: function() {}
                },
                shadowOffset: {
                    diff: function() {}
                },
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                style: {
                    alignContent: {},
                    alignItems: {},
                    alignSelf: {},
                    aspectRatio: {},
                    backfaceVisibility: {},
                    backgroundColor: {
                        process: function() {}
                    },
                    borderBottomColor: {
                        process: function() {}
                    },
                    borderBottomLeftRadius: {},
                    borderBottomRightRadius: {},
                    borderBottomWidth: {},
                    borderColor: {
                        process: function() {}
                    },
                    borderLeftColor: {
                        process: function() {}
                    },
                    borderLeftWidth: {},
                    borderRadius: {},
                    borderRightColor: {
                        process: function() {}
                    },
                    borderRightWidth: {},
                    borderStyle: {},
                    borderTopColor: {
                        process: function() {}
                    },
                    borderTopLeftRadius: {},
                    borderTopRightRadius: {},
                    borderTopWidth: {},
                    borderWidth: {},
                    bottom: {},
                    color: {
                        process: function() {}
                    },
                    decomposedMatrix: {},
                    direction: {},
                    display: {},
                    elevation: {},
                    flex: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexGrow: {},
                    flexShrink: {},
                    flexWrap: {},
                    fontFamily: {},
                    fontSize: {},
                    fontStyle: {},
                    fontVariant: {},
                    fontWeight: {},
                    height: {},
                    includeFontPadding: {},
                    justifyContent: {},
                    left: {},
                    letterSpacing: {},
                    lineHeight: {},
                    margin: {},
                    marginBottom: {},
                    marginHorizontal: {},
                    marginLeft: {},
                    marginRight: {},
                    marginTop: {},
                    marginVertical: {},
                    maxHeight: {},
                    maxWidth: {},
                    minHeight: {},
                    minWidth: {},
                    opacity: {},
                    overflow: {},
                    overlayColor: {
                        process: function() {}
                    },
                    padding: {},
                    paddingBottom: {},
                    paddingHorizontal: {},
                    paddingLeft: {},
                    paddingRight: {},
                    paddingTop: {},
                    paddingVertical: {},
                    position: {},
                    resizeMode: {},
                    right: {},
                    rotation: {},
                    scaleX: {},
                    scaleY: {},
                    shadowColor: {
                        process: function() {}
                    },
                    shadowOffset: {
                        diff: function() {}
                    },
                    shadowOpacity: {},
                    shadowRadius: {},
                    textAlign: {},
                    textAlignVertical: {},
                    textDecorationColor: {
                        process: function() {}
                    },
                    textDecorationLine: {},
                    textDecorationStyle: {},
                    textShadowColor: {
                        process: function() {}
                    },
                    textShadowOffset: {},
                    textShadowRadius: {},
                    tintColor: {
                        process: function() {}
                    },
                    top: {},
                    transform: {
                        process: function() {}
                    },
                    transformMatrix: {},
                    translateX: {},
                    translateY: {},
                    width: {},
                    writingDirection: {},
                    zIndex: {}
                },
                testID: {},
                top: {},
                trackImage: {
                    process: {
                        pickScale: function() {},
                        setCustomSourceTransformer: function() {}
                    }
                },
                trackTintColor: {
                    process: function() {}
                },
                transform: {
                    diff: function() {}
                },
                width: {},
                zIndex: {}
            }
        },
        RCTRawText: {
            Commands: {},
            Constants: {},
            Manager: {},
            NativeProps: {
                text: {}
            }
        },
        RCTRefreshControl: {
            Commands: {},
            Constants: {},
            Manager: {},
            NativeProps: {
                onRefresh: {},
                refreshing: {},
                tintColor: {},
                title: {},
                titleColor: {}
            },
            propTypes: {
                accessibilityComponentType: {
                    isRequired: function() {}
                },
                accessibilityLabel: {
                    isRequired: function() {}
                },
                accessibilityLiveRegion: {
                    isRequired: function() {}
                },
                accessibilityTraits: {
                    isRequired: function() {}
                },
                accessibilityViewIsModal: {
                    isRequired: function() {}
                },
                accessible: {
                    isRequired: function() {}
                },
                collapsable: {
                    isRequired: function() {}
                },
                colors: {
                    isRequired: function() {}
                },
                enabled: {
                    isRequired: function() {}
                },
                hitSlop: {
                    isRequired: function() {}
                },
                importantForAccessibility: {
                    isRequired: function() {}
                },
                nativeID: {
                    isRequired: function() {}
                },
                needsOffscreenAlphaCompositing: {
                    isRequired: function() {}
                },
                onAccessibilityTap: {
                    isRequired: function() {}
                },
                onLayout: {
                    isRequired: function() {}
                },
                onMagicTap: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponder: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                onRefresh: {
                    isRequired: function() {}
                },
                onResponderGrant: {
                    isRequired: function() {}
                },
                onResponderMove: {
                    isRequired: function() {}
                },
                onResponderReject: {
                    isRequired: function() {}
                },
                onResponderRelease: {
                    isRequired: function() {}
                },
                onResponderTerminate: {
                    isRequired: function() {}
                },
                onResponderTerminationRequest: {
                    isRequired: function() {}
                },
                onStartShouldSetResponder: {
                    isRequired: function() {}
                },
                onStartShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                pointerEvents: {
                    isRequired: function() {}
                },
                progressBackgroundColor: {
                    isRequired: function() {}
                },
                progressViewOffset: {
                    isRequired: function() {}
                },
                refreshing: function() {},
                removeClippedSubviews: {
                    isRequired: function() {}
                },
                renderToHardwareTextureAndroid: {
                    isRequired: function() {}
                },
                shouldRasterizeIOS: {
                    isRequired: function() {}
                },
                size: {
                    isRequired: function() {}
                },
                style: function() {},
                testID: {
                    isRequired: function() {}
                },
                tintColor: {
                    isRequired: function() {}
                },
                title: {
                    isRequired: function() {}
                },
                titleColor: {
                    isRequired: function() {}
                }
            },
            uiViewClassName: {},
            validAttributes: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                aspectRatio: {},
                backfaceVisibility: {},
                backgroundColor: {
                    process: function() {}
                },
                borderBottomColor: {
                    process: function() {}
                },
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {
                    process: function() {}
                },
                borderLeftColor: {
                    process: function() {}
                },
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {
                    process: function() {}
                },
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {
                    process: function() {}
                },
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                direction: {},
                display: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                height: {},
                hitSlop: {
                    diff: function() {}
                },
                justifyContent: {},
                left: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxWidth: {},
                minHeight: {},
                minWidth: {},
                onAccessibilityTap: {},
                onLayout: {},
                onMagicTap: {},
                onRefresh: {},
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                pointerEvents: {},
                position: {},
                refreshing: {},
                removeClippedSubviews: {},
                right: {},
                shadowColor: {
                    process: function() {}
                },
                shadowOffset: {
                    diff: function() {}
                },
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                style: {
                    alignContent: {},
                    alignItems: {},
                    alignSelf: {},
                    aspectRatio: {},
                    backfaceVisibility: {},
                    backgroundColor: {
                        process: function() {}
                    },
                    borderBottomColor: {
                        process: function() {}
                    },
                    borderBottomLeftRadius: {},
                    borderBottomRightRadius: {},
                    borderBottomWidth: {},
                    borderColor: {
                        process: function() {}
                    },
                    borderLeftColor: {
                        process: function() {}
                    },
                    borderLeftWidth: {},
                    borderRadius: {},
                    borderRightColor: {
                        process: function() {}
                    },
                    borderRightWidth: {},
                    borderStyle: {},
                    borderTopColor: {
                        process: function() {}
                    },
                    borderTopLeftRadius: {},
                    borderTopRightRadius: {},
                    borderTopWidth: {},
                    borderWidth: {},
                    bottom: {},
                    color: {
                        process: function() {}
                    },
                    decomposedMatrix: {},
                    direction: {},
                    display: {},
                    elevation: {},
                    flex: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexGrow: {},
                    flexShrink: {},
                    flexWrap: {},
                    fontFamily: {},
                    fontSize: {},
                    fontStyle: {},
                    fontVariant: {},
                    fontWeight: {},
                    height: {},
                    includeFontPadding: {},
                    justifyContent: {},
                    left: {},
                    letterSpacing: {},
                    lineHeight: {},
                    margin: {},
                    marginBottom: {},
                    marginHorizontal: {},
                    marginLeft: {},
                    marginRight: {},
                    marginTop: {},
                    marginVertical: {},
                    maxHeight: {},
                    maxWidth: {},
                    minHeight: {},
                    minWidth: {},
                    opacity: {},
                    overflow: {},
                    overlayColor: {
                        process: function() {}
                    },
                    padding: {},
                    paddingBottom: {},
                    paddingHorizontal: {},
                    paddingLeft: {},
                    paddingRight: {},
                    paddingTop: {},
                    paddingVertical: {},
                    position: {},
                    resizeMode: {},
                    right: {},
                    rotation: {},
                    scaleX: {},
                    scaleY: {},
                    shadowColor: {
                        process: function() {}
                    },
                    shadowOffset: {
                        diff: function() {}
                    },
                    shadowOpacity: {},
                    shadowRadius: {},
                    textAlign: {},
                    textAlignVertical: {},
                    textDecorationColor: {
                        process: function() {}
                    },
                    textDecorationLine: {},
                    textDecorationStyle: {},
                    textShadowColor: {
                        process: function() {}
                    },
                    textShadowOffset: {},
                    textShadowRadius: {},
                    tintColor: {
                        process: function() {}
                    },
                    top: {},
                    transform: {
                        process: function() {}
                    },
                    transformMatrix: {},
                    translateX: {},
                    translateY: {},
                    width: {},
                    writingDirection: {},
                    zIndex: {}
                },
                testID: {},
                tintColor: {
                    process: function() {}
                },
                title: {},
                titleColor: {
                    process: function() {}
                },
                top: {},
                transform: {
                    diff: function() {}
                },
                width: {},
                zIndex: {}
            }
        },
        RCTScrollContentView: {
            Commands: {},
            Constants: {},
            Manager: {},
            NativeProps: {},
            propTypes: {
                accessibilityComponentType: {
                    isRequired: function() {}
                },
                accessibilityLabel: {
                    isRequired: function() {}
                },
                accessibilityLiveRegion: {
                    isRequired: function() {}
                },
                accessibilityTraits: {
                    isRequired: function() {}
                },
                accessibilityViewIsModal: {
                    isRequired: function() {}
                },
                accessible: {
                    isRequired: function() {}
                },
                collapsable: {
                    isRequired: function() {}
                },
                hitSlop: {
                    isRequired: function() {}
                },
                importantForAccessibility: {
                    isRequired: function() {}
                },
                nativeID: {
                    isRequired: function() {}
                },
                needsOffscreenAlphaCompositing: {
                    isRequired: function() {}
                },
                onAccessibilityTap: {
                    isRequired: function() {}
                },
                onLayout: {
                    isRequired: function() {}
                },
                onMagicTap: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponder: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                onResponderGrant: {
                    isRequired: function() {}
                },
                onResponderMove: {
                    isRequired: function() {}
                },
                onResponderReject: {
                    isRequired: function() {}
                },
                onResponderRelease: {
                    isRequired: function() {}
                },
                onResponderTerminate: {
                    isRequired: function() {}
                },
                onResponderTerminationRequest: {
                    isRequired: function() {}
                },
                onStartShouldSetResponder: {
                    isRequired: function() {}
                },
                onStartShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                pointerEvents: {
                    isRequired: function() {}
                },
                removeClippedSubviews: {
                    isRequired: function() {}
                },
                renderToHardwareTextureAndroid: {
                    isRequired: function() {}
                },
                shouldRasterizeIOS: {
                    isRequired: function() {}
                },
                style: function() {},
                testID: {
                    isRequired: function() {}
                }
            },
            uiViewClassName: {},
            validAttributes: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                aspectRatio: {},
                backfaceVisibility: {},
                backgroundColor: {
                    process: function() {}
                },
                borderBottomColor: {
                    process: function() {}
                },
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {
                    process: function() {}
                },
                borderLeftColor: {
                    process: function() {}
                },
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {
                    process: function() {}
                },
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {
                    process: function() {}
                },
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                direction: {},
                display: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                height: {},
                hitSlop: {
                    diff: function() {}
                },
                justifyContent: {},
                left: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxWidth: {},
                minHeight: {},
                minWidth: {},
                onAccessibilityTap: {},
                onLayout: {},
                onMagicTap: {},
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                pointerEvents: {},
                position: {},
                removeClippedSubviews: {},
                right: {},
                shadowColor: {
                    process: function() {}
                },
                shadowOffset: {
                    diff: function() {}
                },
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                style: {
                    alignContent: {},
                    alignItems: {},
                    alignSelf: {},
                    aspectRatio: {},
                    backfaceVisibility: {},
                    backgroundColor: {
                        process: function() {}
                    },
                    borderBottomColor: {
                        process: function() {}
                    },
                    borderBottomLeftRadius: {},
                    borderBottomRightRadius: {},
                    borderBottomWidth: {},
                    borderColor: {
                        process: function() {}
                    },
                    borderLeftColor: {
                        process: function() {}
                    },
                    borderLeftWidth: {},
                    borderRadius: {},
                    borderRightColor: {
                        process: function() {}
                    },
                    borderRightWidth: {},
                    borderStyle: {},
                    borderTopColor: {
                        process: function() {}
                    },
                    borderTopLeftRadius: {},
                    borderTopRightRadius: {},
                    borderTopWidth: {},
                    borderWidth: {},
                    bottom: {},
                    color: {
                        process: function() {}
                    },
                    decomposedMatrix: {},
                    direction: {},
                    display: {},
                    elevation: {},
                    flex: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexGrow: {},
                    flexShrink: {},
                    flexWrap: {},
                    fontFamily: {},
                    fontSize: {},
                    fontStyle: {},
                    fontVariant: {},
                    fontWeight: {},
                    height: {},
                    includeFontPadding: {},
                    justifyContent: {},
                    left: {},
                    letterSpacing: {},
                    lineHeight: {},
                    margin: {},
                    marginBottom: {},
                    marginHorizontal: {},
                    marginLeft: {},
                    marginRight: {},
                    marginTop: {},
                    marginVertical: {},
                    maxHeight: {},
                    maxWidth: {},
                    minHeight: {},
                    minWidth: {},
                    opacity: {},
                    overflow: {},
                    overlayColor: {
                        process: function() {}
                    },
                    padding: {},
                    paddingBottom: {},
                    paddingHorizontal: {},
                    paddingLeft: {},
                    paddingRight: {},
                    paddingTop: {},
                    paddingVertical: {},
                    position: {},
                    resizeMode: {},
                    right: {},
                    rotation: {},
                    scaleX: {},
                    scaleY: {},
                    shadowColor: {
                        process: function() {}
                    },
                    shadowOffset: {
                        diff: function() {}
                    },
                    shadowOpacity: {},
                    shadowRadius: {},
                    textAlign: {},
                    textAlignVertical: {},
                    textDecorationColor: {
                        process: function() {}
                    },
                    textDecorationLine: {},
                    textDecorationStyle: {},
                    textShadowColor: {
                        process: function() {}
                    },
                    textShadowOffset: {},
                    textShadowRadius: {},
                    tintColor: {
                        process: function() {}
                    },
                    top: {},
                    transform: {
                        process: function() {}
                    },
                    transformMatrix: {},
                    translateX: {},
                    translateY: {},
                    width: {},
                    writingDirection: {},
                    zIndex: {}
                },
                testID: {},
                top: {},
                transform: {
                    diff: function() {}
                },
                width: {},
                zIndex: {}
            }
        },
        RCTScrollView: {
            Commands: {
                calculateChildFrames: {},
                flashScrollIndicators: {},
                getContentSize: {},
                scrollTo: {},
                scrollToEnd: {},
                zoomToRect: {}
            },
            Constants: {},
            Manager: {},
            NativeProps: {
                alwaysBounceHorizontal: {},
                alwaysBounceVertical: {},
                automaticallyAdjustContentInsets: {},
                bounces: {},
                bouncesZoom: {},
                canCancelContentTouches: {},
                centerContent: {},
                contentInset: {},
                contentOffset: {},
                decelerationRate: {},
                directionalLockEnabled: {},
                indicatorStyle: {},
                keyboardDismissMode: {},
                maximumZoomScale: {},
                minimumZoomScale: {},
                onMomentumScrollBegin: {},
                onMomentumScrollEnd: {},
                onScroll: {},
                onScrollAnimationEnd: {},
                onScrollBeginDrag: {},
                onScrollEndDrag: {},
                overflow: {},
                pagingEnabled: {},
                scrollEnabled: {},
                scrollEventThrottle: {},
                scrollIndicatorInsets: {},
                scrollsToTop: {},
                showsHorizontalScrollIndicator: {},
                showsVerticalScrollIndicator: {},
                snapToAlignment: {},
                snapToInterval: {},
                zoomScale: {}
            },
            propTypes: {
                accessibilityComponentType: {
                    isRequired: function() {}
                },
                accessibilityLabel: {
                    isRequired: function() {}
                },
                accessibilityLiveRegion: {
                    isRequired: function() {}
                },
                accessibilityTraits: {
                    isRequired: function() {}
                },
                accessibilityViewIsModal: {
                    isRequired: function() {}
                },
                accessible: {
                    isRequired: function() {}
                },
                alwaysBounceHorizontal: {
                    isRequired: function() {}
                },
                alwaysBounceVertical: {
                    isRequired: function() {}
                },
                automaticallyAdjustContentInsets: {
                    isRequired: function() {}
                },
                bounces: {
                    isRequired: function() {}
                },
                bouncesZoom: {
                    isRequired: function() {}
                },
                canCancelContentTouches: {
                    isRequired: function() {}
                },
                centerContent: {
                    isRequired: function() {}
                },
                collapsable: {
                    isRequired: function() {}
                },
                contentContainerStyle: function() {},
                contentInset: {
                    isRequired: function() {}
                },
                contentOffset: {
                    isRequired: function() {}
                },
                decelerationRate: {
                    isRequired: function() {}
                },
                directionalLockEnabled: {
                    isRequired: function() {}
                },
                endFillColor: {
                    isRequired: function() {}
                },
                hitSlop: {
                    isRequired: function() {}
                },
                horizontal: {
                    isRequired: function() {}
                },
                importantForAccessibility: {
                    isRequired: function() {}
                },
                indicatorStyle: {
                    isRequired: function() {}
                },
                keyboardDismissMode: {
                    isRequired: function() {}
                },
                keyboardShouldPersistTaps: {
                    isRequired: function() {}
                },
                maximumZoomScale: {
                    isRequired: function() {}
                },
                minimumZoomScale: {
                    isRequired: function() {}
                },
                nativeID: {
                    isRequired: function() {}
                },
                needsOffscreenAlphaCompositing: {
                    isRequired: function() {}
                },
                onAccessibilityTap: {
                    isRequired: function() {}
                },
                onContentSizeChange: {
                    isRequired: function() {}
                },
                onLayout: {
                    isRequired: function() {}
                },
                onMagicTap: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponder: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                onResponderGrant: {
                    isRequired: function() {}
                },
                onResponderMove: {
                    isRequired: function() {}
                },
                onResponderReject: {
                    isRequired: function() {}
                },
                onResponderRelease: {
                    isRequired: function() {}
                },
                onResponderTerminate: {
                    isRequired: function() {}
                },
                onResponderTerminationRequest: {
                    isRequired: function() {}
                },
                onScroll: {
                    isRequired: function() {}
                },
                onScrollAnimationEnd: {
                    isRequired: function() {}
                },
                onStartShouldSetResponder: {
                    isRequired: function() {}
                },
                onStartShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                overScrollMode: {
                    isRequired: function() {}
                },
                pagingEnabled: {
                    isRequired: function() {}
                },
                pointerEvents: {
                    isRequired: function() {}
                },
                refreshControl: {
                    isRequired: function() {}
                },
                removeClippedSubviews: {
                    isRequired: function() {}
                },
                renderToHardwareTextureAndroid: {
                    isRequired: function() {}
                },
                scrollEnabled: {
                    isRequired: function() {}
                },
                scrollEventThrottle: {
                    isRequired: function() {}
                },
                scrollIndicatorInsets: {
                    isRequired: function() {}
                },
                scrollPerfTag: {
                    isRequired: function() {}
                },
                scrollsToTop: {
                    isRequired: function() {}
                },
                shouldRasterizeIOS: {
                    isRequired: function() {}
                },
                showsHorizontalScrollIndicator: {
                    isRequired: function() {}
                },
                showsVerticalScrollIndicator: {
                    isRequired: function() {}
                },
                snapToAlignment: {
                    isRequired: function() {}
                },
                snapToInterval: {
                    isRequired: function() {}
                },
                stickyHeaderIndices: {
                    isRequired: function() {}
                },
                style: function() {},
                testID: {
                    isRequired: function() {}
                },
                zoomScale: {
                    isRequired: function() {}
                }
            },
            uiViewClassName: {},
            validAttributes: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                alwaysBounceHorizontal: {},
                alwaysBounceVertical: {},
                aspectRatio: {},
                automaticallyAdjustContentInsets: {},
                backfaceVisibility: {},
                backgroundColor: {
                    process: function() {}
                },
                borderBottomColor: {
                    process: function() {}
                },
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {
                    process: function() {}
                },
                borderLeftColor: {
                    process: function() {}
                },
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {
                    process: function() {}
                },
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {
                    process: function() {}
                },
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                bounces: {},
                bouncesZoom: {},
                canCancelContentTouches: {},
                centerContent: {},
                contentInset: {
                    diff: function() {}
                },
                contentOffset: {
                    diff: function() {}
                },
                decelerationRate: {},
                direction: {},
                directionalLockEnabled: {},
                display: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                height: {},
                hitSlop: {
                    diff: function() {}
                },
                indicatorStyle: {},
                justifyContent: {},
                keyboardDismissMode: {},
                left: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxWidth: {},
                maximumZoomScale: {},
                minHeight: {},
                minWidth: {},
                minimumZoomScale: {},
                onAccessibilityTap: {},
                onLayout: {},
                onMagicTap: {},
                onMomentumScrollBegin: {},
                onMomentumScrollEnd: {},
                onScroll: {},
                onScrollAnimationEnd: {},
                onScrollBeginDrag: {},
                onScrollEndDrag: {},
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                pagingEnabled: {},
                pointerEvents: {},
                position: {},
                removeClippedSubviews: {},
                right: {},
                scrollEnabled: {},
                scrollEventThrottle: {},
                scrollIndicatorInsets: {
                    diff: function() {}
                },
                scrollsToTop: {},
                shadowColor: {
                    process: function() {}
                },
                shadowOffset: {
                    diff: function() {}
                },
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                showsHorizontalScrollIndicator: {},
                showsVerticalScrollIndicator: {},
                snapToAlignment: {},
                snapToInterval: {},
                style: {
                    alignContent: {},
                    alignItems: {},
                    alignSelf: {},
                    aspectRatio: {},
                    backfaceVisibility: {},
                    backgroundColor: {
                        process: function() {}
                    },
                    borderBottomColor: {
                        process: function() {}
                    },
                    borderBottomLeftRadius: {},
                    borderBottomRightRadius: {},
                    borderBottomWidth: {},
                    borderColor: {
                        process: function() {}
                    },
                    borderLeftColor: {
                        process: function() {}
                    },
                    borderLeftWidth: {},
                    borderRadius: {},
                    borderRightColor: {
                        process: function() {}
                    },
                    borderRightWidth: {},
                    borderStyle: {},
                    borderTopColor: {
                        process: function() {}
                    },
                    borderTopLeftRadius: {},
                    borderTopRightRadius: {},
                    borderTopWidth: {},
                    borderWidth: {},
                    bottom: {},
                    color: {
                        process: function() {}
                    },
                    decomposedMatrix: {},
                    direction: {},
                    display: {},
                    elevation: {},
                    flex: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexGrow: {},
                    flexShrink: {},
                    flexWrap: {},
                    fontFamily: {},
                    fontSize: {},
                    fontStyle: {},
                    fontVariant: {},
                    fontWeight: {},
                    height: {},
                    includeFontPadding: {},
                    justifyContent: {},
                    left: {},
                    letterSpacing: {},
                    lineHeight: {},
                    margin: {},
                    marginBottom: {},
                    marginHorizontal: {},
                    marginLeft: {},
                    marginRight: {},
                    marginTop: {},
                    marginVertical: {},
                    maxHeight: {},
                    maxWidth: {},
                    minHeight: {},
                    minWidth: {},
                    opacity: {},
                    overflow: {},
                    overlayColor: {
                        process: function() {}
                    },
                    padding: {},
                    paddingBottom: {},
                    paddingHorizontal: {},
                    paddingLeft: {},
                    paddingRight: {},
                    paddingTop: {},
                    paddingVertical: {},
                    position: {},
                    resizeMode: {},
                    right: {},
                    rotation: {},
                    scaleX: {},
                    scaleY: {},
                    shadowColor: {
                        process: function() {}
                    },
                    shadowOffset: {
                        diff: function() {}
                    },
                    shadowOpacity: {},
                    shadowRadius: {},
                    textAlign: {},
                    textAlignVertical: {},
                    textDecorationColor: {
                        process: function() {}
                    },
                    textDecorationLine: {},
                    textDecorationStyle: {},
                    textShadowColor: {
                        process: function() {}
                    },
                    textShadowOffset: {},
                    textShadowRadius: {},
                    tintColor: {
                        process: function() {}
                    },
                    top: {},
                    transform: {
                        process: function() {}
                    },
                    transformMatrix: {},
                    translateX: {},
                    translateY: {},
                    width: {},
                    writingDirection: {},
                    zIndex: {}
                },
                testID: {},
                top: {},
                transform: {
                    diff: function() {}
                },
                width: {},
                zIndex: {},
                zoomScale: {}
            }
        },
        RCTSegmentedControl: {
            Commands: {},
            Constants: {},
            Manager: {},
            NativeProps: {
                enabled: {},
                momentary: {},
                onChange: {},
                selectedIndex: {},
                tintColor: {},
                values: {}
            },
            propTypes: {
                accessibilityComponentType: {
                    isRequired: function() {}
                },
                accessibilityLabel: {
                    isRequired: function() {}
                },
                accessibilityLiveRegion: {
                    isRequired: function() {}
                },
                accessibilityTraits: {
                    isRequired: function() {}
                },
                accessibilityViewIsModal: {
                    isRequired: function() {}
                },
                accessible: {
                    isRequired: function() {}
                },
                collapsable: {
                    isRequired: function() {}
                },
                enabled: {
                    isRequired: function() {}
                },
                hitSlop: {
                    isRequired: function() {}
                },
                importantForAccessibility: {
                    isRequired: function() {}
                },
                momentary: {
                    isRequired: function() {}
                },
                nativeID: {
                    isRequired: function() {}
                },
                needsOffscreenAlphaCompositing: {
                    isRequired: function() {}
                },
                onAccessibilityTap: {
                    isRequired: function() {}
                },
                onChange: {
                    isRequired: function() {}
                },
                onLayout: {
                    isRequired: function() {}
                },
                onMagicTap: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponder: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                onResponderGrant: {
                    isRequired: function() {}
                },
                onResponderMove: {
                    isRequired: function() {}
                },
                onResponderReject: {
                    isRequired: function() {}
                },
                onResponderRelease: {
                    isRequired: function() {}
                },
                onResponderTerminate: {
                    isRequired: function() {}
                },
                onResponderTerminationRequest: {
                    isRequired: function() {}
                },
                onStartShouldSetResponder: {
                    isRequired: function() {}
                },
                onStartShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                onValueChange: {
                    isRequired: function() {}
                },
                pointerEvents: {
                    isRequired: function() {}
                },
                removeClippedSubviews: {
                    isRequired: function() {}
                },
                renderToHardwareTextureAndroid: {
                    isRequired: function() {}
                },
                selectedIndex: {
                    isRequired: function() {}
                },
                shouldRasterizeIOS: {
                    isRequired: function() {}
                },
                style: function() {},
                testID: {
                    isRequired: function() {}
                },
                tintColor: {
                    isRequired: function() {}
                },
                values: {
                    isRequired: function() {}
                }
            },
            uiViewClassName: {},
            validAttributes: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                aspectRatio: {},
                backfaceVisibility: {},
                backgroundColor: {
                    process: function() {}
                },
                borderBottomColor: {
                    process: function() {}
                },
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {
                    process: function() {}
                },
                borderLeftColor: {
                    process: function() {}
                },
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {
                    process: function() {}
                },
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {
                    process: function() {}
                },
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                direction: {},
                display: {},
                enabled: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                height: {},
                hitSlop: {
                    diff: function() {}
                },
                justifyContent: {},
                left: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxWidth: {},
                minHeight: {},
                minWidth: {},
                momentary: {},
                onAccessibilityTap: {},
                onChange: {},
                onLayout: {},
                onMagicTap: {},
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                pointerEvents: {},
                position: {},
                removeClippedSubviews: {},
                right: {},
                selectedIndex: {},
                shadowColor: {
                    process: function() {}
                },
                shadowOffset: {
                    diff: function() {}
                },
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                style: {
                    alignContent: {},
                    alignItems: {},
                    alignSelf: {},
                    aspectRatio: {},
                    backfaceVisibility: {},
                    backgroundColor: {
                        process: function() {}
                    },
                    borderBottomColor: {
                        process: function() {}
                    },
                    borderBottomLeftRadius: {},
                    borderBottomRightRadius: {},
                    borderBottomWidth: {},
                    borderColor: {
                        process: function() {}
                    },
                    borderLeftColor: {
                        process: function() {}
                    },
                    borderLeftWidth: {},
                    borderRadius: {},
                    borderRightColor: {
                        process: function() {}
                    },
                    borderRightWidth: {},
                    borderStyle: {},
                    borderTopColor: {
                        process: function() {}
                    },
                    borderTopLeftRadius: {},
                    borderTopRightRadius: {},
                    borderTopWidth: {},
                    borderWidth: {},
                    bottom: {},
                    color: {
                        process: function() {}
                    },
                    decomposedMatrix: {},
                    direction: {},
                    display: {},
                    elevation: {},
                    flex: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexGrow: {},
                    flexShrink: {},
                    flexWrap: {},
                    fontFamily: {},
                    fontSize: {},
                    fontStyle: {},
                    fontVariant: {},
                    fontWeight: {},
                    height: {},
                    includeFontPadding: {},
                    justifyContent: {},
                    left: {},
                    letterSpacing: {},
                    lineHeight: {},
                    margin: {},
                    marginBottom: {},
                    marginHorizontal: {},
                    marginLeft: {},
                    marginRight: {},
                    marginTop: {},
                    marginVertical: {},
                    maxHeight: {},
                    maxWidth: {},
                    minHeight: {},
                    minWidth: {},
                    opacity: {},
                    overflow: {},
                    overlayColor: {
                        process: function() {}
                    },
                    padding: {},
                    paddingBottom: {},
                    paddingHorizontal: {},
                    paddingLeft: {},
                    paddingRight: {},
                    paddingTop: {},
                    paddingVertical: {},
                    position: {},
                    resizeMode: {},
                    right: {},
                    rotation: {},
                    scaleX: {},
                    scaleY: {},
                    shadowColor: {
                        process: function() {}
                    },
                    shadowOffset: {
                        diff: function() {}
                    },
                    shadowOpacity: {},
                    shadowRadius: {},
                    textAlign: {},
                    textAlignVertical: {},
                    textDecorationColor: {
                        process: function() {}
                    },
                    textDecorationLine: {},
                    textDecorationStyle: {},
                    textShadowColor: {
                        process: function() {}
                    },
                    textShadowOffset: {},
                    textShadowRadius: {},
                    tintColor: {
                        process: function() {}
                    },
                    top: {},
                    transform: {
                        process: function() {}
                    },
                    transformMatrix: {},
                    translateX: {},
                    translateY: {},
                    width: {},
                    writingDirection: {},
                    zIndex: {}
                },
                testID: {},
                tintColor: {
                    process: function() {}
                },
                top: {},
                transform: {
                    diff: function() {}
                },
                values: {},
                width: {},
                zIndex: {}
            }
        },
        RCTSlider: {
            Commands: {},
            Constants: {},
            Manager: {},
            NativeProps: {
                disabled: {},
                maximumTrackImage: {},
                maximumTrackTintColor: {},
                maximumValue: {},
                minimumTrackImage: {},
                minimumTrackTintColor: {},
                minimumValue: {},
                onSlidingComplete: {},
                onValueChange: {},
                step: {},
                thumbImage: {},
                trackImage: {},
                value: {}
            },
            propTypes: {
                accessibilityComponentType: {
                    isRequired: function() {}
                },
                accessibilityLabel: {
                    isRequired: function() {}
                },
                accessibilityLiveRegion: {
                    isRequired: function() {}
                },
                accessibilityTraits: {
                    isRequired: function() {}
                },
                accessibilityViewIsModal: {
                    isRequired: function() {}
                },
                accessible: {
                    isRequired: function() {}
                },
                collapsable: {
                    isRequired: function() {}
                },
                disabled: {
                    isRequired: function() {}
                },
                hitSlop: {
                    isRequired: function() {}
                },
                importantForAccessibility: {
                    isRequired: function() {}
                },
                maximumTrackImage: {
                    isRequired: function() {}
                },
                maximumTrackTintColor: {
                    isRequired: function() {}
                },
                maximumValue: {
                    isRequired: function() {}
                },
                minimumTrackImage: {
                    isRequired: function() {}
                },
                minimumTrackTintColor: {
                    isRequired: function() {}
                },
                minimumValue: {
                    isRequired: function() {}
                },
                nativeID: {
                    isRequired: function() {}
                },
                needsOffscreenAlphaCompositing: {
                    isRequired: function() {}
                },
                onAccessibilityTap: {
                    isRequired: function() {}
                },
                onLayout: {
                    isRequired: function() {}
                },
                onMagicTap: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponder: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                onResponderGrant: {
                    isRequired: function() {}
                },
                onResponderMove: {
                    isRequired: function() {}
                },
                onResponderReject: {
                    isRequired: function() {}
                },
                onResponderRelease: {
                    isRequired: function() {}
                },
                onResponderTerminate: {
                    isRequired: function() {}
                },
                onResponderTerminationRequest: {
                    isRequired: function() {}
                },
                onSlidingComplete: {
                    isRequired: function() {}
                },
                onStartShouldSetResponder: {
                    isRequired: function() {}
                },
                onStartShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                onValueChange: {
                    isRequired: function() {}
                },
                pointerEvents: {
                    isRequired: function() {}
                },
                removeClippedSubviews: {
                    isRequired: function() {}
                },
                renderToHardwareTextureAndroid: {
                    isRequired: function() {}
                },
                shouldRasterizeIOS: {
                    isRequired: function() {}
                },
                step: {
                    isRequired: function() {}
                },
                style: function() {},
                testID: {
                    isRequired: function() {}
                },
                thumbImage: {
                    isRequired: function() {}
                },
                thumbTintColor: {
                    isRequired: function() {}
                },
                trackImage: {
                    isRequired: function() {}
                },
                value: {
                    isRequired: function() {}
                }
            },
            uiViewClassName: {},
            validAttributes: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                aspectRatio: {},
                backfaceVisibility: {},
                backgroundColor: {
                    process: function() {}
                },
                borderBottomColor: {
                    process: function() {}
                },
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {
                    process: function() {}
                },
                borderLeftColor: {
                    process: function() {}
                },
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {
                    process: function() {}
                },
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {
                    process: function() {}
                },
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                direction: {},
                disabled: {},
                display: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                height: {},
                hitSlop: {
                    diff: function() {}
                },
                justifyContent: {},
                left: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxWidth: {},
                maximumTrackImage: {
                    process: {
                        pickScale: function() {},
                        setCustomSourceTransformer: function() {}
                    }
                },
                maximumTrackTintColor: {
                    process: function() {}
                },
                maximumValue: {},
                minHeight: {},
                minWidth: {},
                minimumTrackImage: {
                    process: {
                        pickScale: function() {},
                        setCustomSourceTransformer: function() {}
                    }
                },
                minimumTrackTintColor: {
                    process: function() {}
                },
                minimumValue: {},
                onAccessibilityTap: {},
                onLayout: {},
                onMagicTap: {},
                onSlidingComplete: {},
                onValueChange: {},
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                pointerEvents: {},
                position: {},
                removeClippedSubviews: {},
                right: {},
                shadowColor: {
                    process: function() {}
                },
                shadowOffset: {
                    diff: function() {}
                },
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                step: {},
                style: {
                    alignContent: {},
                    alignItems: {},
                    alignSelf: {},
                    aspectRatio: {},
                    backfaceVisibility: {},
                    backgroundColor: {
                        process: function() {}
                    },
                    borderBottomColor: {
                        process: function() {}
                    },
                    borderBottomLeftRadius: {},
                    borderBottomRightRadius: {},
                    borderBottomWidth: {},
                    borderColor: {
                        process: function() {}
                    },
                    borderLeftColor: {
                        process: function() {}
                    },
                    borderLeftWidth: {},
                    borderRadius: {},
                    borderRightColor: {
                        process: function() {}
                    },
                    borderRightWidth: {},
                    borderStyle: {},
                    borderTopColor: {
                        process: function() {}
                    },
                    borderTopLeftRadius: {},
                    borderTopRightRadius: {},
                    borderTopWidth: {},
                    borderWidth: {},
                    bottom: {},
                    color: {
                        process: function() {}
                    },
                    decomposedMatrix: {},
                    direction: {},
                    display: {},
                    elevation: {},
                    flex: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexGrow: {},
                    flexShrink: {},
                    flexWrap: {},
                    fontFamily: {},
                    fontSize: {},
                    fontStyle: {},
                    fontVariant: {},
                    fontWeight: {},
                    height: {},
                    includeFontPadding: {},
                    justifyContent: {},
                    left: {},
                    letterSpacing: {},
                    lineHeight: {},
                    margin: {},
                    marginBottom: {},
                    marginHorizontal: {},
                    marginLeft: {},
                    marginRight: {},
                    marginTop: {},
                    marginVertical: {},
                    maxHeight: {},
                    maxWidth: {},
                    minHeight: {},
                    minWidth: {},
                    opacity: {},
                    overflow: {},
                    overlayColor: {
                        process: function() {}
                    },
                    padding: {},
                    paddingBottom: {},
                    paddingHorizontal: {},
                    paddingLeft: {},
                    paddingRight: {},
                    paddingTop: {},
                    paddingVertical: {},
                    position: {},
                    resizeMode: {},
                    right: {},
                    rotation: {},
                    scaleX: {},
                    scaleY: {},
                    shadowColor: {
                        process: function() {}
                    },
                    shadowOffset: {
                        diff: function() {}
                    },
                    shadowOpacity: {},
                    shadowRadius: {},
                    textAlign: {},
                    textAlignVertical: {},
                    textDecorationColor: {
                        process: function() {}
                    },
                    textDecorationLine: {},
                    textDecorationStyle: {},
                    textShadowColor: {
                        process: function() {}
                    },
                    textShadowOffset: {},
                    textShadowRadius: {},
                    tintColor: {
                        process: function() {}
                    },
                    top: {},
                    transform: {
                        process: function() {}
                    },
                    transformMatrix: {},
                    translateX: {},
                    translateY: {},
                    width: {},
                    writingDirection: {},
                    zIndex: {}
                },
                testID: {},
                thumbImage: {
                    process: {
                        pickScale: function() {},
                        setCustomSourceTransformer: function() {}
                    }
                },
                top: {},
                trackImage: {
                    process: {
                        pickScale: function() {},
                        setCustomSourceTransformer: function() {}
                    }
                },
                transform: {
                    diff: function() {}
                },
                value: {},
                width: {},
                zIndex: {}
            }
        },
        RCTSwitch: {
            Commands: {},
            Constants: {},
            Manager: {},
            NativeProps: {
                disabled: {},
                onChange: {},
                onTintColor: {},
                thumbTintColor: {},
                tintColor: {},
                value: {}
            },
            propTypes: {
                accessibilityComponentType: {
                    isRequired: function() {}
                },
                accessibilityLabel: {
                    isRequired: function() {}
                },
                accessibilityLiveRegion: {
                    isRequired: function() {}
                },
                accessibilityTraits: {
                    isRequired: function() {}
                },
                accessibilityViewIsModal: {
                    isRequired: function() {}
                },
                accessible: {
                    isRequired: function() {}
                },
                collapsable: {
                    isRequired: function() {}
                },
                disabled: {
                    isRequired: function() {}
                },
                hitSlop: {
                    isRequired: function() {}
                },
                importantForAccessibility: {
                    isRequired: function() {}
                },
                nativeID: {
                    isRequired: function() {}
                },
                needsOffscreenAlphaCompositing: {
                    isRequired: function() {}
                },
                onAccessibilityTap: {
                    isRequired: function() {}
                },
                onLayout: {
                    isRequired: function() {}
                },
                onMagicTap: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponder: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                onResponderGrant: {
                    isRequired: function() {}
                },
                onResponderMove: {
                    isRequired: function() {}
                },
                onResponderReject: {
                    isRequired: function() {}
                },
                onResponderRelease: {
                    isRequired: function() {}
                },
                onResponderTerminate: {
                    isRequired: function() {}
                },
                onResponderTerminationRequest: {
                    isRequired: function() {}
                },
                onStartShouldSetResponder: {
                    isRequired: function() {}
                },
                onStartShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                onTintColor: {
                    isRequired: function() {}
                },
                onValueChange: {
                    isRequired: function() {}
                },
                pointerEvents: {
                    isRequired: function() {}
                },
                removeClippedSubviews: {
                    isRequired: function() {}
                },
                renderToHardwareTextureAndroid: {
                    isRequired: function() {}
                },
                shouldRasterizeIOS: {
                    isRequired: function() {}
                },
                style: function() {},
                testID: {
                    isRequired: function() {}
                },
                thumbTintColor: {
                    isRequired: function() {}
                },
                tintColor: {
                    isRequired: function() {}
                },
                value: {
                    isRequired: function() {}
                }
            },
            uiViewClassName: {},
            validAttributes: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                aspectRatio: {},
                backfaceVisibility: {},
                backgroundColor: {
                    process: function() {}
                },
                borderBottomColor: {
                    process: function() {}
                },
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {
                    process: function() {}
                },
                borderLeftColor: {
                    process: function() {}
                },
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {
                    process: function() {}
                },
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {
                    process: function() {}
                },
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                direction: {},
                disabled: {},
                display: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                height: {},
                hitSlop: {
                    diff: function() {}
                },
                justifyContent: {},
                left: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxWidth: {},
                minHeight: {},
                minWidth: {},
                onAccessibilityTap: {},
                onChange: {},
                onLayout: {},
                onMagicTap: {},
                onTintColor: {
                    process: function() {}
                },
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                pointerEvents: {},
                position: {},
                removeClippedSubviews: {},
                right: {},
                shadowColor: {
                    process: function() {}
                },
                shadowOffset: {
                    diff: function() {}
                },
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                style: {
                    alignContent: {},
                    alignItems: {},
                    alignSelf: {},
                    aspectRatio: {},
                    backfaceVisibility: {},
                    backgroundColor: {
                        process: function() {}
                    },
                    borderBottomColor: {
                        process: function() {}
                    },
                    borderBottomLeftRadius: {},
                    borderBottomRightRadius: {},
                    borderBottomWidth: {},
                    borderColor: {
                        process: function() {}
                    },
                    borderLeftColor: {
                        process: function() {}
                    },
                    borderLeftWidth: {},
                    borderRadius: {},
                    borderRightColor: {
                        process: function() {}
                    },
                    borderRightWidth: {},
                    borderStyle: {},
                    borderTopColor: {
                        process: function() {}
                    },
                    borderTopLeftRadius: {},
                    borderTopRightRadius: {},
                    borderTopWidth: {},
                    borderWidth: {},
                    bottom: {},
                    color: {
                        process: function() {}
                    },
                    decomposedMatrix: {},
                    direction: {},
                    display: {},
                    elevation: {},
                    flex: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexGrow: {},
                    flexShrink: {},
                    flexWrap: {},
                    fontFamily: {},
                    fontSize: {},
                    fontStyle: {},
                    fontVariant: {},
                    fontWeight: {},
                    height: {},
                    includeFontPadding: {},
                    justifyContent: {},
                    left: {},
                    letterSpacing: {},
                    lineHeight: {},
                    margin: {},
                    marginBottom: {},
                    marginHorizontal: {},
                    marginLeft: {},
                    marginRight: {},
                    marginTop: {},
                    marginVertical: {},
                    maxHeight: {},
                    maxWidth: {},
                    minHeight: {},
                    minWidth: {},
                    opacity: {},
                    overflow: {},
                    overlayColor: {
                        process: function() {}
                    },
                    padding: {},
                    paddingBottom: {},
                    paddingHorizontal: {},
                    paddingLeft: {},
                    paddingRight: {},
                    paddingTop: {},
                    paddingVertical: {},
                    position: {},
                    resizeMode: {},
                    right: {},
                    rotation: {},
                    scaleX: {},
                    scaleY: {},
                    shadowColor: {
                        process: function() {}
                    },
                    shadowOffset: {
                        diff: function() {}
                    },
                    shadowOpacity: {},
                    shadowRadius: {},
                    textAlign: {},
                    textAlignVertical: {},
                    textDecorationColor: {
                        process: function() {}
                    },
                    textDecorationLine: {},
                    textDecorationStyle: {},
                    textShadowColor: {
                        process: function() {}
                    },
                    textShadowOffset: {},
                    textShadowRadius: {},
                    tintColor: {
                        process: function() {}
                    },
                    top: {},
                    transform: {
                        process: function() {}
                    },
                    transformMatrix: {},
                    translateX: {},
                    translateY: {},
                    width: {},
                    writingDirection: {},
                    zIndex: {}
                },
                testID: {},
                thumbTintColor: {
                    process: function() {}
                },
                tintColor: {
                    process: function() {}
                },
                top: {},
                transform: {
                    diff: function() {}
                },
                value: {},
                width: {},
                zIndex: {}
            }
        },
        RCTTabBar: {
            Commands: {},
            Constants: {},
            Manager: {},
            NativeProps: {
                barTintColor: {},
                itemPositioning: {},
                tintColor: {},
                translucent: {},
                unselectedItemTintColor: {},
                unselectedTintColor: {}
            },
            propTypes: {
                accessibilityComponentType: {
                    isRequired: function() {}
                },
                accessibilityLabel: {
                    isRequired: function() {}
                },
                accessibilityLiveRegion: {
                    isRequired: function() {}
                },
                accessibilityTraits: {
                    isRequired: function() {}
                },
                accessibilityViewIsModal: {
                    isRequired: function() {}
                },
                accessible: {
                    isRequired: function() {}
                },
                barTintColor: {
                    isRequired: function() {}
                },
                collapsable: {
                    isRequired: function() {}
                },
                hitSlop: {
                    isRequired: function() {}
                },
                importantForAccessibility: {
                    isRequired: function() {}
                },
                itemPositioning: {
                    isRequired: function() {}
                },
                nativeID: {
                    isRequired: function() {}
                },
                needsOffscreenAlphaCompositing: {
                    isRequired: function() {}
                },
                onAccessibilityTap: {
                    isRequired: function() {}
                },
                onLayout: {
                    isRequired: function() {}
                },
                onMagicTap: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponder: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                onResponderGrant: {
                    isRequired: function() {}
                },
                onResponderMove: {
                    isRequired: function() {}
                },
                onResponderReject: {
                    isRequired: function() {}
                },
                onResponderRelease: {
                    isRequired: function() {}
                },
                onResponderTerminate: {
                    isRequired: function() {}
                },
                onResponderTerminationRequest: {
                    isRequired: function() {}
                },
                onStartShouldSetResponder: {
                    isRequired: function() {}
                },
                onStartShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                pointerEvents: {
                    isRequired: function() {}
                },
                removeClippedSubviews: {
                    isRequired: function() {}
                },
                renderToHardwareTextureAndroid: {
                    isRequired: function() {}
                },
                shouldRasterizeIOS: {
                    isRequired: function() {}
                },
                style: function() {},
                testID: {
                    isRequired: function() {}
                },
                tintColor: {
                    isRequired: function() {}
                },
                translucent: {
                    isRequired: function() {}
                },
                unselectedItemTintColor: {
                    isRequired: function() {}
                },
                unselectedTintColor: {
                    isRequired: function() {}
                }
            },
            uiViewClassName: {},
            validAttributes: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                aspectRatio: {},
                backfaceVisibility: {},
                backgroundColor: {
                    process: function() {}
                },
                barTintColor: {
                    process: function() {}
                },
                borderBottomColor: {
                    process: function() {}
                },
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {
                    process: function() {}
                },
                borderLeftColor: {
                    process: function() {}
                },
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {
                    process: function() {}
                },
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {
                    process: function() {}
                },
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                direction: {},
                display: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                height: {},
                hitSlop: {
                    diff: function() {}
                },
                itemPositioning: {},
                justifyContent: {},
                left: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxWidth: {},
                minHeight: {},
                minWidth: {},
                onAccessibilityTap: {},
                onLayout: {},
                onMagicTap: {},
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                pointerEvents: {},
                position: {},
                removeClippedSubviews: {},
                right: {},
                shadowColor: {
                    process: function() {}
                },
                shadowOffset: {
                    diff: function() {}
                },
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                style: {
                    alignContent: {},
                    alignItems: {},
                    alignSelf: {},
                    aspectRatio: {},
                    backfaceVisibility: {},
                    backgroundColor: {
                        process: function() {}
                    },
                    borderBottomColor: {
                        process: function() {}
                    },
                    borderBottomLeftRadius: {},
                    borderBottomRightRadius: {},
                    borderBottomWidth: {},
                    borderColor: {
                        process: function() {}
                    },
                    borderLeftColor: {
                        process: function() {}
                    },
                    borderLeftWidth: {},
                    borderRadius: {},
                    borderRightColor: {
                        process: function() {}
                    },
                    borderRightWidth: {},
                    borderStyle: {},
                    borderTopColor: {
                        process: function() {}
                    },
                    borderTopLeftRadius: {},
                    borderTopRightRadius: {},
                    borderTopWidth: {},
                    borderWidth: {},
                    bottom: {},
                    color: {
                        process: function() {}
                    },
                    decomposedMatrix: {},
                    direction: {},
                    display: {},
                    elevation: {},
                    flex: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexGrow: {},
                    flexShrink: {},
                    flexWrap: {},
                    fontFamily: {},
                    fontSize: {},
                    fontStyle: {},
                    fontVariant: {},
                    fontWeight: {},
                    height: {},
                    includeFontPadding: {},
                    justifyContent: {},
                    left: {},
                    letterSpacing: {},
                    lineHeight: {},
                    margin: {},
                    marginBottom: {},
                    marginHorizontal: {},
                    marginLeft: {},
                    marginRight: {},
                    marginTop: {},
                    marginVertical: {},
                    maxHeight: {},
                    maxWidth: {},
                    minHeight: {},
                    minWidth: {},
                    opacity: {},
                    overflow: {},
                    overlayColor: {
                        process: function() {}
                    },
                    padding: {},
                    paddingBottom: {},
                    paddingHorizontal: {},
                    paddingLeft: {},
                    paddingRight: {},
                    paddingTop: {},
                    paddingVertical: {},
                    position: {},
                    resizeMode: {},
                    right: {},
                    rotation: {},
                    scaleX: {},
                    scaleY: {},
                    shadowColor: {
                        process: function() {}
                    },
                    shadowOffset: {
                        diff: function() {}
                    },
                    shadowOpacity: {},
                    shadowRadius: {},
                    textAlign: {},
                    textAlignVertical: {},
                    textDecorationColor: {
                        process: function() {}
                    },
                    textDecorationLine: {},
                    textDecorationStyle: {},
                    textShadowColor: {
                        process: function() {}
                    },
                    textShadowOffset: {},
                    textShadowRadius: {},
                    tintColor: {
                        process: function() {}
                    },
                    top: {},
                    transform: {
                        process: function() {}
                    },
                    transformMatrix: {},
                    translateX: {},
                    translateY: {},
                    width: {},
                    writingDirection: {},
                    zIndex: {}
                },
                testID: {},
                tintColor: {
                    process: function() {}
                },
                top: {},
                transform: {
                    diff: function() {}
                },
                translucent: {},
                unselectedItemTintColor: {
                    process: function() {}
                },
                unselectedTintColor: {
                    process: function() {}
                },
                width: {},
                zIndex: {}
            }
        },
        RCTTabBarItem: {
            Commands: {},
            Constants: {},
            Manager: {},
            NativeProps: {
                badge: {},
                badgeColor: {},
                icon: {},
                isTVSelectable: {},
                onPress: {},
                renderAsOriginal: {},
                selected: {},
                selectedIcon: {},
                systemIcon: {},
                title: {}
            },
            propTypes: {
                accessibilityComponentType: {
                    isRequired: function() {}
                },
                accessibilityLabel: {
                    isRequired: function() {}
                },
                accessibilityLiveRegion: {
                    isRequired: function() {}
                },
                accessibilityTraits: {
                    isRequired: function() {}
                },
                accessibilityViewIsModal: {
                    isRequired: function() {}
                },
                accessible: {
                    isRequired: function() {}
                },
                badge: {
                    isRequired: function() {}
                },
                badgeColor: {
                    isRequired: function() {}
                },
                collapsable: {
                    isRequired: function() {}
                },
                hitSlop: {
                    isRequired: function() {}
                },
                icon: {
                    isRequired: function() {}
                },
                importantForAccessibility: {
                    isRequired: function() {}
                },
                isTVSelectable: {
                    isRequired: function() {}
                },
                nativeID: {
                    isRequired: function() {}
                },
                needsOffscreenAlphaCompositing: {
                    isRequired: function() {}
                },
                onAccessibilityTap: {
                    isRequired: function() {}
                },
                onLayout: {
                    isRequired: function() {}
                },
                onMagicTap: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponder: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                onPress: {
                    isRequired: function() {}
                },
                onResponderGrant: {
                    isRequired: function() {}
                },
                onResponderMove: {
                    isRequired: function() {}
                },
                onResponderReject: {
                    isRequired: function() {}
                },
                onResponderRelease: {
                    isRequired: function() {}
                },
                onResponderTerminate: {
                    isRequired: function() {}
                },
                onResponderTerminationRequest: {
                    isRequired: function() {}
                },
                onStartShouldSetResponder: {
                    isRequired: function() {}
                },
                onStartShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                pointerEvents: {
                    isRequired: function() {}
                },
                removeClippedSubviews: {
                    isRequired: function() {}
                },
                renderAsOriginal: {
                    isRequired: function() {}
                },
                renderToHardwareTextureAndroid: {
                    isRequired: function() {}
                },
                selected: {
                    isRequired: function() {}
                },
                selectedIcon: {
                    isRequired: function() {}
                },
                shouldRasterizeIOS: {
                    isRequired: function() {}
                },
                style: function() {},
                systemIcon: {
                    isRequired: function() {}
                },
                testID: {
                    isRequired: function() {}
                },
                title: {
                    isRequired: function() {}
                }
            },
            uiViewClassName: {},
            validAttributes: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                aspectRatio: {},
                backfaceVisibility: {},
                backgroundColor: {
                    process: function() {}
                },
                badge: {},
                badgeColor: {
                    process: function() {}
                },
                borderBottomColor: {
                    process: function() {}
                },
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {
                    process: function() {}
                },
                borderLeftColor: {
                    process: function() {}
                },
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {
                    process: function() {}
                },
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {
                    process: function() {}
                },
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                direction: {},
                display: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                height: {},
                hitSlop: {
                    diff: function() {}
                },
                icon: {
                    process: {
                        pickScale: function() {},
                        setCustomSourceTransformer: function() {}
                    }
                },
                isTVSelectable: {},
                justifyContent: {},
                left: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxWidth: {},
                minHeight: {},
                minWidth: {},
                onAccessibilityTap: {},
                onLayout: {},
                onMagicTap: {},
                onPress: {},
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                pointerEvents: {},
                position: {},
                removeClippedSubviews: {},
                renderAsOriginal: {},
                right: {},
                selected: {},
                selectedIcon: {
                    process: {
                        pickScale: function() {},
                        setCustomSourceTransformer: function() {}
                    }
                },
                shadowColor: {
                    process: function() {}
                },
                shadowOffset: {
                    diff: function() {}
                },
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                style: {
                    alignContent: {},
                    alignItems: {},
                    alignSelf: {},
                    aspectRatio: {},
                    backfaceVisibility: {},
                    backgroundColor: {
                        process: function() {}
                    },
                    borderBottomColor: {
                        process: function() {}
                    },
                    borderBottomLeftRadius: {},
                    borderBottomRightRadius: {},
                    borderBottomWidth: {},
                    borderColor: {
                        process: function() {}
                    },
                    borderLeftColor: {
                        process: function() {}
                    },
                    borderLeftWidth: {},
                    borderRadius: {},
                    borderRightColor: {
                        process: function() {}
                    },
                    borderRightWidth: {},
                    borderStyle: {},
                    borderTopColor: {
                        process: function() {}
                    },
                    borderTopLeftRadius: {},
                    borderTopRightRadius: {},
                    borderTopWidth: {},
                    borderWidth: {},
                    bottom: {},
                    color: {
                        process: function() {}
                    },
                    decomposedMatrix: {},
                    direction: {},
                    display: {},
                    elevation: {},
                    flex: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexGrow: {},
                    flexShrink: {},
                    flexWrap: {},
                    fontFamily: {},
                    fontSize: {},
                    fontStyle: {},
                    fontVariant: {},
                    fontWeight: {},
                    height: {},
                    includeFontPadding: {},
                    justifyContent: {},
                    left: {},
                    letterSpacing: {},
                    lineHeight: {},
                    margin: {},
                    marginBottom: {},
                    marginHorizontal: {},
                    marginLeft: {},
                    marginRight: {},
                    marginTop: {},
                    marginVertical: {},
                    maxHeight: {},
                    maxWidth: {},
                    minHeight: {},
                    minWidth: {},
                    opacity: {},
                    overflow: {},
                    overlayColor: {
                        process: function() {}
                    },
                    padding: {},
                    paddingBottom: {},
                    paddingHorizontal: {},
                    paddingLeft: {},
                    paddingRight: {},
                    paddingTop: {},
                    paddingVertical: {},
                    position: {},
                    resizeMode: {},
                    right: {},
                    rotation: {},
                    scaleX: {},
                    scaleY: {},
                    shadowColor: {
                        process: function() {}
                    },
                    shadowOffset: {
                        diff: function() {}
                    },
                    shadowOpacity: {},
                    shadowRadius: {},
                    textAlign: {},
                    textAlignVertical: {},
                    textDecorationColor: {
                        process: function() {}
                    },
                    textDecorationLine: {},
                    textDecorationStyle: {},
                    textShadowColor: {
                        process: function() {}
                    },
                    textShadowOffset: {},
                    textShadowRadius: {},
                    tintColor: {
                        process: function() {}
                    },
                    top: {},
                    transform: {
                        process: function() {}
                    },
                    transformMatrix: {},
                    translateX: {},
                    translateY: {},
                    width: {},
                    writingDirection: {},
                    zIndex: {}
                },
                systemIcon: {},
                testID: {},
                title: {},
                top: {},
                transform: {
                    diff: function() {}
                },
                width: {},
                zIndex: {}
            }
        },
        RCTText: {
            Commands: {},
            Constants: {},
            Manager: {},
            NativeProps: {
                adjustsFontSizeToFit: {},
                allowFontScaling: {},
                color: {},
                ellipsizeMode: {},
                fontFamily: {},
                fontSize: {},
                fontStyle: {},
                fontVariant: {},
                fontWeight: {},
                isHighlighted: {},
                letterSpacing: {},
                lineHeight: {},
                minimumFontScale: {},
                numberOfLines: {},
                opacity: {},
                selectable: {},
                textAlign: {},
                textDecorationColor: {},
                textDecorationLine: {},
                textDecorationStyle: {},
                textShadowColor: {},
                textShadowOffset: {},
                textShadowRadius: {},
                writingDirection: {}
            }
        },
        RCTTextField: {
            Commands: {},
            Constants: {},
            Manager: {},
            NativeProps: {
                autoCapitalize: {},
                autoCorrect: {},
                blurOnSubmit: {},
                caretHidden: {},
                clearButtonMode: {},
                clearTextOnFocus: {},
                color: {},
                editable: {},
                enablesReturnKeyAutomatically: {},
                fontFamily: {},
                fontSize: {},
                fontStyle: {},
                fontWeight: {},
                keyboardAppearance: {},
                keyboardType: {},
                maxLength: {},
                mostRecentEventCount: {},
                onSelectionChange: {},
                password: {},
                placeholder: {},
                placeholderTextColor: {},
                returnKeyType: {},
                secureTextEntry: {},
                selectTextOnFocus: {},
                selection: {},
                selectionColor: {},
                spellCheck: {},
                text: {},
                textAlign: {}
            },
            propTypes: {},
            uiViewClassName: {},
            validAttributes: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                aspectRatio: {},
                autoCapitalize: {},
                autoCorrect: {},
                backfaceVisibility: {},
                backgroundColor: {
                    process: function() {}
                },
                blurOnSubmit: {},
                borderBottomColor: {
                    process: function() {}
                },
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {
                    process: function() {}
                },
                borderLeftColor: {
                    process: function() {}
                },
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {
                    process: function() {}
                },
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {
                    process: function() {}
                },
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                caretHidden: {},
                clearButtonMode: {},
                clearTextOnFocus: {},
                color: {
                    process: function() {}
                },
                direction: {},
                display: {},
                editable: {},
                enablesReturnKeyAutomatically: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                fontFamily: {},
                fontSize: {},
                fontStyle: {},
                fontWeight: {},
                height: {},
                hitSlop: {
                    diff: function() {}
                },
                justifyContent: {},
                keyboardAppearance: {},
                keyboardType: {},
                left: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxLength: {},
                maxWidth: {},
                minHeight: {},
                minWidth: {},
                mostRecentEventCount: {},
                onAccessibilityTap: {},
                onLayout: {},
                onMagicTap: {},
                onSelectionChange: {},
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                password: {},
                placeholder: {},
                placeholderTextColor: {
                    process: function() {}
                },
                pointerEvents: {},
                position: {},
                removeClippedSubviews: {},
                returnKeyType: {},
                right: {},
                secureTextEntry: {},
                selectTextOnFocus: {},
                selection: {},
                selectionColor: {
                    process: function() {}
                },
                shadowColor: {
                    process: function() {}
                },
                shadowOffset: {
                    diff: function() {}
                },
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                spellCheck: {},
                style: {
                    alignContent: {},
                    alignItems: {},
                    alignSelf: {},
                    aspectRatio: {},
                    backfaceVisibility: {},
                    backgroundColor: {
                        process: function() {}
                    },
                    borderBottomColor: {
                        process: function() {}
                    },
                    borderBottomLeftRadius: {},
                    borderBottomRightRadius: {},
                    borderBottomWidth: {},
                    borderColor: {
                        process: function() {}
                    },
                    borderLeftColor: {
                        process: function() {}
                    },
                    borderLeftWidth: {},
                    borderRadius: {},
                    borderRightColor: {
                        process: function() {}
                    },
                    borderRightWidth: {},
                    borderStyle: {},
                    borderTopColor: {
                        process: function() {}
                    },
                    borderTopLeftRadius: {},
                    borderTopRightRadius: {},
                    borderTopWidth: {},
                    borderWidth: {},
                    bottom: {},
                    color: {
                        process: function() {}
                    },
                    decomposedMatrix: {},
                    direction: {},
                    display: {},
                    elevation: {},
                    flex: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexGrow: {},
                    flexShrink: {},
                    flexWrap: {},
                    fontFamily: {},
                    fontSize: {},
                    fontStyle: {},
                    fontVariant: {},
                    fontWeight: {},
                    height: {},
                    includeFontPadding: {},
                    justifyContent: {},
                    left: {},
                    letterSpacing: {},
                    lineHeight: {},
                    margin: {},
                    marginBottom: {},
                    marginHorizontal: {},
                    marginLeft: {},
                    marginRight: {},
                    marginTop: {},
                    marginVertical: {},
                    maxHeight: {},
                    maxWidth: {},
                    minHeight: {},
                    minWidth: {},
                    opacity: {},
                    overflow: {},
                    overlayColor: {
                        process: function() {}
                    },
                    padding: {},
                    paddingBottom: {},
                    paddingHorizontal: {},
                    paddingLeft: {},
                    paddingRight: {},
                    paddingTop: {},
                    paddingVertical: {},
                    position: {},
                    resizeMode: {},
                    right: {},
                    rotation: {},
                    scaleX: {},
                    scaleY: {},
                    shadowColor: {
                        process: function() {}
                    },
                    shadowOffset: {
                        diff: function() {}
                    },
                    shadowOpacity: {},
                    shadowRadius: {},
                    textAlign: {},
                    textAlignVertical: {},
                    textDecorationColor: {
                        process: function() {}
                    },
                    textDecorationLine: {},
                    textDecorationStyle: {},
                    textShadowColor: {
                        process: function() {}
                    },
                    textShadowOffset: {},
                    textShadowRadius: {},
                    tintColor: {
                        process: function() {}
                    },
                    top: {},
                    transform: {
                        process: function() {}
                    },
                    transformMatrix: {},
                    translateX: {},
                    translateY: {},
                    width: {},
                    writingDirection: {},
                    zIndex: {}
                },
                testID: {},
                text: {},
                textAlign: {},
                top: {},
                transform: {
                    diff: function() {}
                },
                width: {},
                zIndex: {}
            }
        },
        RCTTextView: {
            Commands: {},
            Constants: {},
            Manager: {},
            NativeProps: {
                autoCapitalize: {},
                autoCorrect: {},
                blurOnSubmit: {},
                clearTextOnFocus: {},
                color: {},
                dataDetectorTypes: {},
                editable: {},
                enablesReturnKeyAutomatically: {},
                fontFamily: {},
                fontSize: {},
                fontStyle: {},
                fontWeight: {},
                keyboardAppearance: {},
                keyboardType: {},
                maxLength: {},
                mostRecentEventCount: {},
                onChange: {},
                onContentSizeChange: {},
                onScroll: {},
                onSelectionChange: {},
                onTextInput: {},
                placeholder: {},
                placeholderTextColor: {},
                returnKeyType: {},
                secureTextEntry: {},
                selectTextOnFocus: {},
                selection: {},
                selectionColor: {},
                spellCheck: {},
                text: {},
                textAlign: {}
            },
            propTypes: {},
            uiViewClassName: {},
            validAttributes: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                aspectRatio: {},
                autoCapitalize: {},
                autoCorrect: {},
                backfaceVisibility: {},
                backgroundColor: {
                    process: function() {}
                },
                blurOnSubmit: {},
                borderBottomColor: {
                    process: function() {}
                },
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {
                    process: function() {}
                },
                borderLeftColor: {
                    process: function() {}
                },
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {
                    process: function() {}
                },
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {
                    process: function() {}
                },
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                clearTextOnFocus: {},
                color: {
                    process: function() {}
                },
                dataDetectorTypes: {},
                direction: {},
                display: {},
                editable: {},
                enablesReturnKeyAutomatically: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                fontFamily: {},
                fontSize: {},
                fontStyle: {},
                fontWeight: {},
                height: {},
                hitSlop: {
                    diff: function() {}
                },
                justifyContent: {},
                keyboardAppearance: {},
                keyboardType: {},
                left: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxLength: {},
                maxWidth: {},
                minHeight: {},
                minWidth: {},
                mostRecentEventCount: {},
                onAccessibilityTap: {},
                onChange: {},
                onContentSizeChange: {},
                onLayout: {},
                onMagicTap: {},
                onScroll: {},
                onSelectionChange: {},
                onTextInput: {},
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                placeholder: {},
                placeholderTextColor: {
                    process: function() {}
                },
                pointerEvents: {},
                position: {},
                removeClippedSubviews: {},
                returnKeyType: {},
                right: {},
                secureTextEntry: {},
                selectTextOnFocus: {},
                selection: {},
                selectionColor: {
                    process: function() {}
                },
                shadowColor: {
                    process: function() {}
                },
                shadowOffset: {
                    diff: function() {}
                },
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                spellCheck: {},
                style: {
                    alignContent: {},
                    alignItems: {},
                    alignSelf: {},
                    aspectRatio: {},
                    backfaceVisibility: {},
                    backgroundColor: {
                        process: function() {}
                    },
                    borderBottomColor: {
                        process: function() {}
                    },
                    borderBottomLeftRadius: {},
                    borderBottomRightRadius: {},
                    borderBottomWidth: {},
                    borderColor: {
                        process: function() {}
                    },
                    borderLeftColor: {
                        process: function() {}
                    },
                    borderLeftWidth: {},
                    borderRadius: {},
                    borderRightColor: {
                        process: function() {}
                    },
                    borderRightWidth: {},
                    borderStyle: {},
                    borderTopColor: {
                        process: function() {}
                    },
                    borderTopLeftRadius: {},
                    borderTopRightRadius: {},
                    borderTopWidth: {},
                    borderWidth: {},
                    bottom: {},
                    color: {
                        process: function() {}
                    },
                    decomposedMatrix: {},
                    direction: {},
                    display: {},
                    elevation: {},
                    flex: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexGrow: {},
                    flexShrink: {},
                    flexWrap: {},
                    fontFamily: {},
                    fontSize: {},
                    fontStyle: {},
                    fontVariant: {},
                    fontWeight: {},
                    height: {},
                    includeFontPadding: {},
                    justifyContent: {},
                    left: {},
                    letterSpacing: {},
                    lineHeight: {},
                    margin: {},
                    marginBottom: {},
                    marginHorizontal: {},
                    marginLeft: {},
                    marginRight: {},
                    marginTop: {},
                    marginVertical: {},
                    maxHeight: {},
                    maxWidth: {},
                    minHeight: {},
                    minWidth: {},
                    opacity: {},
                    overflow: {},
                    overlayColor: {
                        process: function() {}
                    },
                    padding: {},
                    paddingBottom: {},
                    paddingHorizontal: {},
                    paddingLeft: {},
                    paddingRight: {},
                    paddingTop: {},
                    paddingVertical: {},
                    position: {},
                    resizeMode: {},
                    right: {},
                    rotation: {},
                    scaleX: {},
                    scaleY: {},
                    shadowColor: {
                        process: function() {}
                    },
                    shadowOffset: {
                        diff: function() {}
                    },
                    shadowOpacity: {},
                    shadowRadius: {},
                    textAlign: {},
                    textAlignVertical: {},
                    textDecorationColor: {
                        process: function() {}
                    },
                    textDecorationLine: {},
                    textDecorationStyle: {},
                    textShadowColor: {
                        process: function() {}
                    },
                    textShadowOffset: {},
                    textShadowRadius: {},
                    tintColor: {
                        process: function() {}
                    },
                    top: {},
                    transform: {
                        process: function() {}
                    },
                    transformMatrix: {},
                    translateX: {},
                    translateY: {},
                    width: {},
                    writingDirection: {},
                    zIndex: {}
                },
                testID: {},
                text: {},
                textAlign: {},
                top: {},
                transform: {
                    diff: function() {}
                },
                width: {},
                zIndex: {}
            }
        },
        RCTView: {
            Commands: {},
            Constants: {},
            Manager: {},
            NativeProps: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                aspectRatio: {},
                backfaceVisibility: {},
                backgroundColor: {},
                borderBottomColor: {},
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {},
                borderLeftColor: {},
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {},
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {},
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                direction: {},
                display: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                height: {},
                hitSlop: {},
                justifyContent: {},
                left: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxWidth: {},
                minHeight: {},
                minWidth: {},
                onAccessibilityTap: {},
                onLayout: {},
                onMagicTap: {},
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                pointerEvents: {},
                position: {},
                removeClippedSubviews: {},
                right: {},
                shadowColor: {},
                shadowOffset: {},
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                testID: {},
                top: {},
                transform: {},
                width: {},
                zIndex: {}
            },
            propTypes: {
                accessibilityComponentType: {
                    isRequired: function() {}
                },
                accessibilityLabel: {
                    isRequired: function() {}
                },
                accessibilityLiveRegion: {
                    isRequired: function() {}
                },
                accessibilityTraits: {
                    isRequired: function() {}
                },
                accessibilityViewIsModal: {
                    isRequired: function() {}
                },
                accessible: {
                    isRequired: function() {}
                },
                collapsable: {
                    isRequired: function() {}
                },
                hitSlop: {
                    isRequired: function() {}
                },
                importantForAccessibility: {
                    isRequired: function() {}
                },
                nativeID: {
                    isRequired: function() {}
                },
                needsOffscreenAlphaCompositing: {
                    isRequired: function() {}
                },
                onAccessibilityTap: {
                    isRequired: function() {}
                },
                onLayout: {
                    isRequired: function() {}
                },
                onMagicTap: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponder: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                onResponderGrant: {
                    isRequired: function() {}
                },
                onResponderMove: {
                    isRequired: function() {}
                },
                onResponderReject: {
                    isRequired: function() {}
                },
                onResponderRelease: {
                    isRequired: function() {}
                },
                onResponderTerminate: {
                    isRequired: function() {}
                },
                onResponderTerminationRequest: {
                    isRequired: function() {}
                },
                onStartShouldSetResponder: {
                    isRequired: function() {}
                },
                onStartShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                pointerEvents: {
                    isRequired: function() {}
                },
                removeClippedSubviews: {
                    isRequired: function() {}
                },
                renderToHardwareTextureAndroid: {
                    isRequired: function() {}
                },
                shouldRasterizeIOS: {
                    isRequired: function() {}
                },
                style: function() {},
                testID: {
                    isRequired: function() {}
                }
            },
            uiViewClassName: {},
            validAttributes: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                aspectRatio: {},
                backfaceVisibility: {},
                backgroundColor: {
                    process: function() {}
                },
                borderBottomColor: {
                    process: function() {}
                },
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {
                    process: function() {}
                },
                borderLeftColor: {
                    process: function() {}
                },
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {
                    process: function() {}
                },
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {
                    process: function() {}
                },
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                direction: {},
                display: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                height: {},
                hitSlop: {
                    diff: function() {}
                },
                justifyContent: {},
                left: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxWidth: {},
                minHeight: {},
                minWidth: {},
                onAccessibilityTap: {},
                onLayout: {},
                onMagicTap: {},
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                pointerEvents: {},
                position: {},
                removeClippedSubviews: {},
                right: {},
                shadowColor: {
                    process: function() {}
                },
                shadowOffset: {
                    diff: function() {}
                },
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                style: {
                    alignContent: {},
                    alignItems: {},
                    alignSelf: {},
                    aspectRatio: {},
                    backfaceVisibility: {},
                    backgroundColor: {
                        process: function() {}
                    },
                    borderBottomColor: {
                        process: function() {}
                    },
                    borderBottomLeftRadius: {},
                    borderBottomRightRadius: {},
                    borderBottomWidth: {},
                    borderColor: {
                        process: function() {}
                    },
                    borderLeftColor: {
                        process: function() {}
                    },
                    borderLeftWidth: {},
                    borderRadius: {},
                    borderRightColor: {
                        process: function() {}
                    },
                    borderRightWidth: {},
                    borderStyle: {},
                    borderTopColor: {
                        process: function() {}
                    },
                    borderTopLeftRadius: {},
                    borderTopRightRadius: {},
                    borderTopWidth: {},
                    borderWidth: {},
                    bottom: {},
                    color: {
                        process: function() {}
                    },
                    decomposedMatrix: {},
                    direction: {},
                    display: {},
                    elevation: {},
                    flex: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexGrow: {},
                    flexShrink: {},
                    flexWrap: {},
                    fontFamily: {},
                    fontSize: {},
                    fontStyle: {},
                    fontVariant: {},
                    fontWeight: {},
                    height: {},
                    includeFontPadding: {},
                    justifyContent: {},
                    left: {},
                    letterSpacing: {},
                    lineHeight: {},
                    margin: {},
                    marginBottom: {},
                    marginHorizontal: {},
                    marginLeft: {},
                    marginRight: {},
                    marginTop: {},
                    marginVertical: {},
                    maxHeight: {},
                    maxWidth: {},
                    minHeight: {},
                    minWidth: {},
                    opacity: {},
                    overflow: {},
                    overlayColor: {
                        process: function() {}
                    },
                    padding: {},
                    paddingBottom: {},
                    paddingHorizontal: {},
                    paddingLeft: {},
                    paddingRight: {},
                    paddingTop: {},
                    paddingVertical: {},
                    position: {},
                    resizeMode: {},
                    right: {},
                    rotation: {},
                    scaleX: {},
                    scaleY: {},
                    shadowColor: {
                        process: function() {}
                    },
                    shadowOffset: {
                        diff: function() {}
                    },
                    shadowOpacity: {},
                    shadowRadius: {},
                    textAlign: {},
                    textAlignVertical: {},
                    textDecorationColor: {
                        process: function() {}
                    },
                    textDecorationLine: {},
                    textDecorationStyle: {},
                    textShadowColor: {
                        process: function() {}
                    },
                    textShadowOffset: {},
                    textShadowRadius: {},
                    tintColor: {
                        process: function() {}
                    },
                    top: {},
                    transform: {
                        process: function() {}
                    },
                    transformMatrix: {},
                    translateX: {},
                    translateY: {},
                    width: {},
                    writingDirection: {},
                    zIndex: {}
                },
                testID: {},
                top: {},
                transform: {
                    diff: function() {}
                },
                width: {},
                zIndex: {}
            }
        },
        RCTWebView: {
            Commands: {
                goBack: {},
                goForward: {},
                injectJavaScript: {},
                postMessage: {},
                reload: {},
                startLoadWithResult: {},
                stopLoading: {}
            },
            Constants: {},
            Manager: {},
            NativeProps: {
                allowsInlineMediaPlayback: {},
                automaticallyAdjustContentInsets: {},
                bounces: {},
                contentInset: {},
                dataDetectorTypes: {},
                decelerationRate: {},
                injectedJavaScript: {},
                mediaPlaybackRequiresUserAction: {},
                messagingEnabled: {},
                onLoadingError: {},
                onLoadingFinish: {},
                onLoadingStart: {},
                onMessage: {},
                onShouldStartLoadWithRequest: {},
                scalesPageToFit: {},
                scrollEnabled: {},
                source: {}
            },
            propTypes: {
                accessibilityComponentType: {
                    isRequired: function() {}
                },
                accessibilityLabel: {
                    isRequired: function() {}
                },
                accessibilityLiveRegion: {
                    isRequired: function() {}
                },
                accessibilityTraits: {
                    isRequired: function() {}
                },
                accessibilityViewIsModal: {
                    isRequired: function() {}
                },
                accessible: {
                    isRequired: function() {}
                },
                allowsInlineMediaPlayback: {
                    isRequired: function() {}
                },
                automaticallyAdjustContentInsets: {
                    isRequired: function() {}
                },
                bounces: {
                    isRequired: function() {}
                },
                collapsable: {
                    isRequired: function() {}
                },
                contentInset: {
                    isRequired: function() {}
                },
                dataDetectorTypes: {
                    isRequired: function() {}
                },
                decelerationRate: {
                    isRequired: function() {}
                },
                domStorageEnabled: {
                    isRequired: function() {}
                },
                hitSlop: {
                    isRequired: function() {}
                },
                html: function() {},
                importantForAccessibility: {
                    isRequired: function() {}
                },
                injectJavaScript: {
                    isRequired: function() {}
                },
                injectedJavaScript: {
                    isRequired: function() {}
                },
                javaScriptEnabled: {
                    isRequired: function() {}
                },
                mediaPlaybackRequiresUserAction: {
                    isRequired: function() {}
                },
                mixedContentMode: {
                    isRequired: function() {}
                },
                nativeID: {
                    isRequired: function() {}
                },
                needsOffscreenAlphaCompositing: {
                    isRequired: function() {}
                },
                onAccessibilityTap: {
                    isRequired: function() {}
                },
                onError: {
                    isRequired: function() {}
                },
                onLayout: {
                    isRequired: function() {}
                },
                onLoad: {
                    isRequired: function() {}
                },
                onLoadEnd: {
                    isRequired: function() {}
                },
                onLoadStart: {
                    isRequired: function() {}
                },
                onMagicTap: {
                    isRequired: function() {}
                },
                onMessage: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponder: {
                    isRequired: function() {}
                },
                onMoveShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                onNavigationStateChange: {
                    isRequired: function() {}
                },
                onResponderGrant: {
                    isRequired: function() {}
                },
                onResponderMove: {
                    isRequired: function() {}
                },
                onResponderReject: {
                    isRequired: function() {}
                },
                onResponderRelease: {
                    isRequired: function() {}
                },
                onResponderTerminate: {
                    isRequired: function() {}
                },
                onResponderTerminationRequest: {
                    isRequired: function() {}
                },
                onShouldStartLoadWithRequest: {
                    isRequired: function() {}
                },
                onStartShouldSetResponder: {
                    isRequired: function() {}
                },
                onStartShouldSetResponderCapture: {
                    isRequired: function() {}
                },
                pointerEvents: {
                    isRequired: function() {}
                },
                removeClippedSubviews: {
                    isRequired: function() {}
                },
                renderError: {
                    isRequired: function() {}
                },
                renderLoading: {
                    isRequired: function() {}
                },
                renderToHardwareTextureAndroid: {
                    isRequired: function() {}
                },
                scalesPageToFit: {
                    isRequired: function() {}
                },
                scrollEnabled: {
                    isRequired: function() {}
                },
                shouldRasterizeIOS: {
                    isRequired: function() {}
                },
                source: {
                    isRequired: function() {}
                },
                startInLoadingState: {
                    isRequired: function() {}
                },
                style: function() {},
                testID: {
                    isRequired: function() {}
                },
                thirdPartyCookiesEnabled: {
                    isRequired: function() {}
                },
                url: function() {},
                userAgent: {
                    isRequired: function() {}
                }
            },
            uiViewClassName: {},
            validAttributes: {
                accessibilityLabel: {},
                accessibilityTraits: {},
                accessibilityViewIsModal: {},
                accessible: {},
                alignContent: {},
                alignItems: {},
                alignSelf: {},
                allowsInlineMediaPlayback: {},
                aspectRatio: {},
                automaticallyAdjustContentInsets: {},
                backfaceVisibility: {},
                backgroundColor: {
                    process: function() {}
                },
                borderBottomColor: {
                    process: function() {}
                },
                borderBottomLeftRadius: {},
                borderBottomRightRadius: {},
                borderBottomWidth: {},
                borderColor: {
                    process: function() {}
                },
                borderLeftColor: {
                    process: function() {}
                },
                borderLeftWidth: {},
                borderRadius: {},
                borderRightColor: {
                    process: function() {}
                },
                borderRightWidth: {},
                borderStyle: {},
                borderTopColor: {
                    process: function() {}
                },
                borderTopLeftRadius: {},
                borderTopRightRadius: {},
                borderTopWidth: {},
                borderWidth: {},
                bottom: {},
                bounces: {},
                contentInset: {
                    diff: function() {}
                },
                dataDetectorTypes: {},
                decelerationRate: {},
                direction: {},
                display: {},
                flex: {},
                flexBasis: {},
                flexDirection: {},
                flexGrow: {},
                flexShrink: {},
                flexWrap: {},
                height: {},
                hitSlop: {
                    diff: function() {}
                },
                injectedJavaScript: {},
                justifyContent: {},
                left: {},
                margin: {},
                marginBottom: {},
                marginHorizontal: {},
                marginLeft: {},
                marginRight: {},
                marginTop: {},
                marginVertical: {},
                maxHeight: {},
                maxWidth: {},
                mediaPlaybackRequiresUserAction: {},
                messagingEnabled: {},
                minHeight: {},
                minWidth: {},
                onAccessibilityTap: {},
                onLayout: {},
                onLoadingError: {},
                onLoadingFinish: {},
                onLoadingStart: {},
                onMagicTap: {},
                onMessage: {},
                onShouldStartLoadWithRequest: {},
                opacity: {},
                overflow: {},
                padding: {},
                paddingBottom: {},
                paddingHorizontal: {},
                paddingLeft: {},
                paddingRight: {},
                paddingTop: {},
                paddingVertical: {},
                pointerEvents: {},
                position: {},
                removeClippedSubviews: {},
                right: {},
                scalesPageToFit: {},
                scrollEnabled: {},
                shadowColor: {
                    process: function() {}
                },
                shadowOffset: {
                    diff: function() {}
                },
                shadowOpacity: {},
                shadowRadius: {},
                shouldRasterizeIOS: {},
                source: {},
                style: {
                    alignContent: {},
                    alignItems: {},
                    alignSelf: {},
                    aspectRatio: {},
                    backfaceVisibility: {},
                    backgroundColor: {
                        process: function() {}
                    },
                    borderBottomColor: {
                        process: function() {}
                    },
                    borderBottomLeftRadius: {},
                    borderBottomRightRadius: {},
                    borderBottomWidth: {},
                    borderColor: {
                        process: function() {}
                    },
                    borderLeftColor: {
                        process: function() {}
                    },
                    borderLeftWidth: {},
                    borderRadius: {},
                    borderRightColor: {
                        process: function() {}
                    },
                    borderRightWidth: {},
                    borderStyle: {},
                    borderTopColor: {
                        process: function() {}
                    },
                    borderTopLeftRadius: {},
                    borderTopRightRadius: {},
                    borderTopWidth: {},
                    borderWidth: {},
                    bottom: {},
                    color: {
                        process: function() {}
                    },
                    decomposedMatrix: {},
                    direction: {},
                    display: {},
                    elevation: {},
                    flex: {},
                    flexBasis: {},
                    flexDirection: {},
                    flexGrow: {},
                    flexShrink: {},
                    flexWrap: {},
                    fontFamily: {},
                    fontSize: {},
                    fontStyle: {},
                    fontVariant: {},
                    fontWeight: {},
                    height: {},
                    includeFontPadding: {},
                    justifyContent: {},
                    left: {},
                    letterSpacing: {},
                    lineHeight: {},
                    margin: {},
                    marginBottom: {},
                    marginHorizontal: {},
                    marginLeft: {},
                    marginRight: {},
                    marginTop: {},
                    marginVertical: {},
                    maxHeight: {},
                    maxWidth: {},
                    minHeight: {},
                    minWidth: {},
                    opacity: {},
                    overflow: {},
                    overlayColor: {
                        process: function() {}
                    },
                    padding: {},
                    paddingBottom: {},
                    paddingHorizontal: {},
                    paddingLeft: {},
                    paddingRight: {},
                    paddingTop: {},
                    paddingVertical: {},
                    position: {},
                    resizeMode: {},
                    right: {},
                    rotation: {},
                    scaleX: {},
                    scaleY: {},
                    shadowColor: {
                        process: function() {}
                    },
                    shadowOffset: {
                        diff: function() {}
                    },
                    shadowOpacity: {},
                    shadowRadius: {},
                    textAlign: {},
                    textAlignVertical: {},
                    textDecorationColor: {
                        process: function() {}
                    },
                    textDecorationLine: {},
                    textDecorationStyle: {},
                    textShadowColor: {
                        process: function() {}
                    },
                    textShadowOffset: {},
                    textShadowRadius: {},
                    tintColor: {
                        process: function() {}
                    },
                    top: {},
                    transform: {
                        process: function() {}
                    },
                    transformMatrix: {},
                    translateX: {},
                    translateY: {},
                    width: {},
                    writingDirection: {},
                    zIndex: {}
                },
                testID: {},
                top: {},
                transform: {
                    diff: function() {}
                },
                width: {},
                zIndex: {}
            }
        },
        __takeSnapshot: {
            type: {}
        },
        blur: {
            type: {}
        },
        clearJSResponder: {
            type: {}
        },
        configureNextLayoutAnimation: {
            type: {}
        },
        createView: {
            type: {}
        },
        customBubblingEventTypes: {
            topBlur: {
                phasedRegistrationNames: {
                    bubbled: {},
                    captured: {}
                }
            },
            topChange: {
                phasedRegistrationNames: {
                    bubbled: {},
                    captured: {}
                }
            },
            topContentSizeChange: {
                phasedRegistrationNames: {
                    bubbled: {},
                    captured: {}
                }
            },
            topEndEditing: {
                phasedRegistrationNames: {
                    bubbled: {},
                    captured: {}
                }
            },
            topFocus: {
                phasedRegistrationNames: {
                    bubbled: {},
                    captured: {}
                }
            },
            topKeyPress: {
                phasedRegistrationNames: {
                    bubbled: {},
                    captured: {}
                }
            },
            topLeftButtonPress: {
                phasedRegistrationNames: {
                    bubbled: {},
                    captured: {}
                }
            },
            topNavigationComplete: {
                phasedRegistrationNames: {
                    bubbled: {},
                    captured: {}
                }
            },
            topPress: {
                phasedRegistrationNames: {
                    bubbled: {},
                    captured: {}
                }
            },
            topRightButtonPress: {
                phasedRegistrationNames: {
                    bubbled: {},
                    captured: {}
                }
            },
            topSlidingComplete: {
                phasedRegistrationNames: {
                    bubbled: {},
                    captured: {}
                }
            },
            topSubmitEditing: {
                phasedRegistrationNames: {
                    bubbled: {},
                    captured: {}
                }
            },
            topTouchCancel: {
                phasedRegistrationNames: {
                    bubbled: {},
                    captured: {}
                }
            },
            topTouchEnd: {
                phasedRegistrationNames: {
                    bubbled: {},
                    captured: {}
                }
            },
            topTouchMove: {
                phasedRegistrationNames: {
                    bubbled: {},
                    captured: {}
                }
            },
            topTouchStart: {
                phasedRegistrationNames: {
                    bubbled: {},
                    captured: {}
                }
            },
            topValueChange: {
                phasedRegistrationNames: {
                    bubbled: {},
                    captured: {}
                }
            }
        },
        customDirectEventTypes: {
            topAccessibilityTap: {
                registrationName: {}
            },
            topError: {
                registrationName: {}
            },
            topLayout: {
                registrationName: {}
            },
            topLoad: {
                registrationName: {}
            },
            topLoadEnd: {
                registrationName: {}
            },
            topLoadStart: {
                registrationName: {}
            },
            topLoadingError: {
                registrationName: {}
            },
            topLoadingFinish: {
                registrationName: {}
            },
            topLoadingStart: {
                registrationName: {}
            },
            topMagicTap: {
                registrationName: {}
            },
            topMessage: {
                registrationName: {}
            },
            topMomentumScrollBegin: {
                registrationName: {}
            },
            topMomentumScrollEnd: {
                registrationName: {}
            },
            topNavigationProgress: {
                registrationName: {}
            },
            topOrientationChange: {
                registrationName: {}
            },
            topPartialLoad: {
                registrationName: {}
            },
            topProgress: {
                registrationName: {}
            },
            topRefresh: {
                registrationName: {}
            },
            topScroll: {
                registrationName: {}
            },
            topScrollAnimationEnd: {
                registrationName: {}
            },
            topScrollBeginDrag: {
                registrationName: {}
            },
            topScrollEndDrag: {
                registrationName: {}
            },
            topSelectionChange: {
                registrationName: {}
            },
            topShouldStartLoadWithRequest: {
                registrationName: {}
            },
            topShow: {
                registrationName: {}
            },
            topTextInput: {
                registrationName: {}
            }
        },
        dispatchViewManagerCommand: {
            type: {}
        },
        findSubviewIn: {
            type: {}
        },
        focus: {
            type: {}
        },
        getContentSizeMultiplier: {
            type: {}
        },
        manageChildren: {
            type: {}
        },
        measure: {
            type: {}
        },
        measureInWindow: {
            type: {}
        },
        measureLayout: {
            type: {}
        },
        measureLayoutRelativeToParent: {
            type: {}
        },
        measureViewsInRect: {
            type: {}
        },
        removeRootView: {
            type: {}
        },
        removeSubviewsFromContainerWithID: {
            type: {}
        },
        replaceExistingNonRootView: {
            type: {}
        },
        setChildren: {
            type: {}
        },
        setJSResponder: {
            type: {}
        },
        takeSnapshot: function() {},
        updateView: {
            type: {}
        },
        viewIsDescendantOf: {
            type: {}
        }
    },
    Vibration: {
        cancel: function() {},
        vibrate: function() {}
    },
    VibrationIOS: {
        vibrate: function() {}
    },
    View: {
        __propTypesSecretDontUseThesePlease: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityLabel: {
                isRequired: function() {}
            },
            accessibilityLiveRegion: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessibilityViewIsModal: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            collapsable: {
                isRequired: function() {}
            },
            hitSlop: {
                isRequired: function() {}
            },
            importantForAccessibility: {
                isRequired: function() {}
            },
            nativeID: {
                isRequired: function() {}
            },
            needsOffscreenAlphaCompositing: {
                isRequired: function() {}
            },
            onAccessibilityTap: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onMagicTap: {
                isRequired: function() {}
            },
            onMoveShouldSetResponder: {
                isRequired: function() {}
            },
            onMoveShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onResponderGrant: {
                isRequired: function() {}
            },
            onResponderMove: {
                isRequired: function() {}
            },
            onResponderReject: {
                isRequired: function() {}
            },
            onResponderRelease: {
                isRequired: function() {}
            },
            onResponderTerminate: {
                isRequired: function() {}
            },
            onResponderTerminationRequest: {
                isRequired: function() {}
            },
            onStartShouldSetResponder: {
                isRequired: function() {}
            },
            onStartShouldSetResponderCapture: {
                isRequired: function() {}
            },
            pointerEvents: {
                isRequired: function() {}
            },
            removeClippedSubviews: {
                isRequired: function() {}
            },
            renderToHardwareTextureAndroid: {
                isRequired: function() {}
            },
            shouldRasterizeIOS: {
                isRequired: function() {}
            },
            style: function() {},
            testID: {
                isRequired: function() {}
            }
        },
        contextTypes: {
            isInAParentText: {
                isRequired: function() {}
            }
        },
        displayName: {},
        propTypes: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityLabel: {
                isRequired: function() {}
            },
            accessibilityLiveRegion: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessibilityViewIsModal: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            collapsable: {
                isRequired: function() {}
            },
            hitSlop: {
                isRequired: function() {}
            },
            importantForAccessibility: {
                isRequired: function() {}
            },
            nativeID: {
                isRequired: function() {}
            },
            needsOffscreenAlphaCompositing: {
                isRequired: function() {}
            },
            onAccessibilityTap: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onMagicTap: {
                isRequired: function() {}
            },
            onMoveShouldSetResponder: {
                isRequired: function() {}
            },
            onMoveShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onResponderGrant: {
                isRequired: function() {}
            },
            onResponderMove: {
                isRequired: function() {}
            },
            onResponderReject: {
                isRequired: function() {}
            },
            onResponderRelease: {
                isRequired: function() {}
            },
            onResponderTerminate: {
                isRequired: function() {}
            },
            onResponderTerminationRequest: {
                isRequired: function() {}
            },
            onStartShouldSetResponder: {
                isRequired: function() {}
            },
            onStartShouldSetResponderCapture: {
                isRequired: function() {}
            },
            pointerEvents: {
                isRequired: function() {}
            },
            removeClippedSubviews: {
                isRequired: function() {}
            },
            renderToHardwareTextureAndroid: {
                isRequired: function() {}
            },
            shouldRasterizeIOS: {
                isRequired: function() {}
            },
            style: function() {},
            testID: {
                isRequired: function() {}
            }
        }
    },
    ViewPagerAndroid: function() {},
    ViewPropTypes: {
        accessibilityComponentType: {
            isRequired: function() {}
        },
        accessibilityLabel: {
            isRequired: function() {}
        },
        accessibilityLiveRegion: {
            isRequired: function() {}
        },
        accessibilityTraits: {
            isRequired: function() {}
        },
        accessibilityViewIsModal: {
            isRequired: function() {}
        },
        accessible: {
            isRequired: function() {}
        },
        collapsable: {
            isRequired: function() {}
        },
        hitSlop: {
            isRequired: function() {}
        },
        importantForAccessibility: {
            isRequired: function() {}
        },
        nativeID: {
            isRequired: function() {}
        },
        needsOffscreenAlphaCompositing: {
            isRequired: function() {}
        },
        onAccessibilityTap: {
            isRequired: function() {}
        },
        onLayout: {
            isRequired: function() {}
        },
        onMagicTap: {
            isRequired: function() {}
        },
        onMoveShouldSetResponder: {
            isRequired: function() {}
        },
        onMoveShouldSetResponderCapture: {
            isRequired: function() {}
        },
        onResponderGrant: {
            isRequired: function() {}
        },
        onResponderMove: {
            isRequired: function() {}
        },
        onResponderReject: {
            isRequired: function() {}
        },
        onResponderRelease: {
            isRequired: function() {}
        },
        onResponderTerminate: {
            isRequired: function() {}
        },
        onResponderTerminationRequest: {
            isRequired: function() {}
        },
        onStartShouldSetResponder: {
            isRequired: function() {}
        },
        onStartShouldSetResponderCapture: {
            isRequired: function() {}
        },
        pointerEvents: {
            isRequired: function() {}
        },
        removeClippedSubviews: {
            isRequired: function() {}
        },
        renderToHardwareTextureAndroid: {
            isRequired: function() {}
        },
        shouldRasterizeIOS: {
            isRequired: function() {}
        },
        style: function() {},
        testID: {
            isRequired: function() {}
        }
    },
    VirtualizedList: {
        defaultProps: {
            disableVirtualization: {},
            horizontal: {},
            initialNumToRender: {},
            keyExtractor: function() {},
            maxToRenderPerBatch: {},
            onEndReachedThreshold: {},
            renderScrollComponent: function() {},
            scrollEventThrottle: {},
            updateCellsBatchingPeriod: {},
            windowSize: {}
        }
    },
    WebView: {
        JSNavigationScheme: {},
        NavigationType: {
            backforward: {},
            click: {},
            formresubmit: {},
            formsubmit: {},
            other: {},
            reload: {}
        },
        propTypes: {
            accessibilityComponentType: {
                isRequired: function() {}
            },
            accessibilityLabel: {
                isRequired: function() {}
            },
            accessibilityLiveRegion: {
                isRequired: function() {}
            },
            accessibilityTraits: {
                isRequired: function() {}
            },
            accessibilityViewIsModal: {
                isRequired: function() {}
            },
            accessible: {
                isRequired: function() {}
            },
            allowsInlineMediaPlayback: {
                isRequired: function() {}
            },
            automaticallyAdjustContentInsets: {
                isRequired: function() {}
            },
            bounces: {
                isRequired: function() {}
            },
            collapsable: {
                isRequired: function() {}
            },
            contentInset: {
                isRequired: function() {}
            },
            dataDetectorTypes: {
                isRequired: function() {}
            },
            decelerationRate: {
                isRequired: function() {}
            },
            domStorageEnabled: {
                isRequired: function() {}
            },
            hitSlop: {
                isRequired: function() {}
            },
            html: function() {},
            importantForAccessibility: {
                isRequired: function() {}
            },
            injectJavaScript: {
                isRequired: function() {}
            },
            injectedJavaScript: {
                isRequired: function() {}
            },
            javaScriptEnabled: {
                isRequired: function() {}
            },
            mediaPlaybackRequiresUserAction: {
                isRequired: function() {}
            },
            mixedContentMode: {
                isRequired: function() {}
            },
            nativeID: {
                isRequired: function() {}
            },
            needsOffscreenAlphaCompositing: {
                isRequired: function() {}
            },
            onAccessibilityTap: {
                isRequired: function() {}
            },
            onError: {
                isRequired: function() {}
            },
            onLayout: {
                isRequired: function() {}
            },
            onLoad: {
                isRequired: function() {}
            },
            onLoadEnd: {
                isRequired: function() {}
            },
            onLoadStart: {
                isRequired: function() {}
            },
            onMagicTap: {
                isRequired: function() {}
            },
            onMessage: {
                isRequired: function() {}
            },
            onMoveShouldSetResponder: {
                isRequired: function() {}
            },
            onMoveShouldSetResponderCapture: {
                isRequired: function() {}
            },
            onNavigationStateChange: {
                isRequired: function() {}
            },
            onResponderGrant: {
                isRequired: function() {}
            },
            onResponderMove: {
                isRequired: function() {}
            },
            onResponderReject: {
                isRequired: function() {}
            },
            onResponderRelease: {
                isRequired: function() {}
            },
            onResponderTerminate: {
                isRequired: function() {}
            },
            onResponderTerminationRequest: {
                isRequired: function() {}
            },
            onShouldStartLoadWithRequest: {
                isRequired: function() {}
            },
            onStartShouldSetResponder: {
                isRequired: function() {}
            },
            onStartShouldSetResponderCapture: {
                isRequired: function() {}
            },
            pointerEvents: {
                isRequired: function() {}
            },
            removeClippedSubviews: {
                isRequired: function() {}
            },
            renderError: {
                isRequired: function() {}
            },
            renderLoading: {
                isRequired: function() {}
            },
            renderToHardwareTextureAndroid: {
                isRequired: function() {}
            },
            scalesPageToFit: {
                isRequired: function() {}
            },
            scrollEnabled: {
                isRequired: function() {}
            },
            shouldRasterizeIOS: {
                isRequired: function() {}
            },
            source: {
                isRequired: function() {}
            },
            startInLoadingState: {
                isRequired: function() {}
            },
            style: function() {},
            testID: {
                isRequired: function() {}
            },
            thirdPartyCookiesEnabled: {
                isRequired: function() {}
            },
            url: function() {},
            userAgent: {
                isRequired: function() {}
            }
        }
    },
    findNodeHandle: function() {},
    processColor: function() {},
    requireNativeComponent: function() {},
    takeSnapshot: function() {},
    unstable_batchedUpdates: function() {}
};
ReactNative.ART.ClippingRectangle.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.ART.Group.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.ART.Path.prototype = {
    _arcToBezier: function() {},
    arc: function() {},
    arcTo: function() {},
    close: function() {},
    constructor: function() {},
    counterArc: function() {},
    counterArcTo: function() {},
    curve: function() {},
    curveTo: function() {},
    initialize: function() {},
    line: function() {},
    lineTo: function() {},
    move: function() {},
    moveTo: function() {},
    onArc: function() {},
    onBezierCurve: function() {},
    onClose: function() {},
    onLine: function() {},
    onMove: function() {},
    onReset: function() {},
    push: function() {},
    reset: function() {},
    toJSON: function() {}
};
ReactNative.ART.Shape.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.ART.Surface.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.ART.Text.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.ART.Transform.prototype = {
    _transform: function() {},
    constructor: function() {},
    initialize: function() {},
    inversePoint: function() {},
    move: function() {},
    moveTo: function() {},
    point: function() {},
    resizeTo: function() {},
    rotate: function() {},
    rotateTo: function() {},
    scale: function() {},
    scaleTo: function() {},
    transform: function() {},
    transformTo: function() {},
    translate: function() {},
    x: function() {},
    xx: function() {},
    xy: function() {},
    y: function() {},
    yx: function() {},
    yy: function() {}
};
ReactNative.ActivityIndicator.prototype = {
    __reactAutoBindPairs: function() {},
    blur: function() {},
    childContextTypes: function() {},
    componentDidMount: function() {},
    componentDidUpdate: function() {},
    componentWillMount: function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount: function() {},
    componentWillUpdate: function() {},
    constructor: function() {},
    contextTypes: function() {},
    focus: function() {},
    forceUpdate: function() {},
    getChildContext: function() {},
    getDefaultProps: function() {},
    getInitialState: function() {},
    isMounted: function() {},
    isReactComponent: function() {},
    measure: function() {},
    measureInWindow: function() {},
    measureLayout: function() {},
    mixins: function() {},
    propTypes: function() {},
    render: function() {},
    replaceState: function() {},
    setNativeProps: function() {},
    setState: function() {},
    shouldComponentUpdate: function() {},
    statics: function() {},
    updateComponent: function() {}
};
ReactNative.Animated.Image.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.Animated.ScrollView.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.Animated.Text.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.Animated.View.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.Button.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.DatePickerIOS.prototype = {
    __reactAutoBindPairs: function() {},
    _onChange: function() {},
    _picker: function() {},
    blur: function() {},
    childContextTypes: function() {},
    componentDidMount: function() {},
    componentDidUpdate: function() {},
    componentWillMount: function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount: function() {},
    componentWillUpdate: function() {},
    constructor: function() {},
    contextTypes: function() {},
    focus: function() {},
    forceUpdate: function() {},
    getChildContext: function() {},
    getDefaultProps: function() {},
    getInitialState: function() {},
    isMounted: function() {},
    isReactComponent: function() {},
    measure: function() {},
    measureInWindow: function() {},
    measureLayout: function() {},
    mixins: function() {},
    propTypes: function() {},
    render: function() {},
    replaceState: function() {},
    setNativeProps: function() {},
    setState: function() {},
    shouldComponentUpdate: function() {},
    statics: function() {},
    updateComponent: function() {}
};
ReactNative.DrawerLayoutAndroid.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.FlatList.prototype = {
    constructor: function() {},
    forceUpdate: function() {},
    isPureReactComponent: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.Image.prototype = {
    __reactAutoBindPairs: function() {},
    blur: function() {},
    childContextTypes: function() {},
    componentDidMount: function() {},
    componentDidUpdate: function() {},
    componentWillMount: function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount: function() {},
    componentWillUpdate: function() {},
    constructor: function() {},
    contextTypes: function() {},
    focus: function() {},
    forceUpdate: function() {},
    getChildContext: function() {},
    getDefaultProps: function() {},
    getInitialState: function() {},
    isMounted: function() {},
    isReactComponent: function() {},
    measure: function() {},
    measureInWindow: function() {},
    measureLayout: function() {},
    mixins: function() {},
    propTypes: function() {},
    render: function() {},
    replaceState: function() {},
    setNativeProps: function() {},
    setState: function() {},
    shouldComponentUpdate: function() {},
    statics: function() {},
    updateComponent: function() {},
    viewConfig: function() {}
};
ReactNative.ImageBackground.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.KeyboardAvoidingView.prototype = {
    __reactAutoBindPairs: function() {},
    cancelAnimationFrame: function() {},
    childContextTypes: function() {},
    clearImmediate: function() {},
    clearInterval: function() {},
    clearTimeout: function() {},
    componentDidMount: function() {},
    componentDidUpdate: function() {},
    componentWillMount: function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount: function() {},
    componentWillUpdate: function() {},
    constructor: function() {},
    contextTypes: function() {},
    forceUpdate: function() {},
    frame: function() {},
    getChildContext: function() {},
    getDefaultProps: function() {},
    getInitialState: function() {},
    isMounted: function() {},
    isReactComponent: function() {},
    mixins: function() {},
    onKeyboardChange: function() {},
    onLayout: function() {},
    propTypes: function() {},
    relativeKeyboardHeight: function() {},
    render: function() {},
    replaceState: function() {},
    requestAnimationFrame: function() {},
    setImmediate: function() {},
    setInterval: function() {},
    setState: function() {},
    setTimeout: function() {},
    shouldComponentUpdate: function() {},
    statics: function() {},
    subscriptions: function() {},
    updateComponent: function() {}
};
ReactNative.ListView.prototype = {
    __reactAutoBindPairs: function() {},
    _childFrames: function() {},
    _getDistanceFromEnd: function() {},
    _maybeCallOnEndReached: function() {},
    _measureAndUpdateScrollProps: function() {},
    _onContentSizeChange: function() {},
    _onLayout: function() {},
    _onRowHighlighted: function() {},
    _onScroll: function() {},
    _pageInNewRows: function() {},
    _prevRenderedRowsCount: function() {},
    _renderMoreRowsIfNeeded: function() {},
    _scrollComponent: function() {},
    _sentEndForContentLength: function() {},
    _setScrollComponentRef: function() {},
    _updateVisibleRows: function() {},
    _visibleRows: function() {},
    addListenerOn: function() {},
    cancelAnimationFrame: function() {},
    childContextTypes: function() {},
    clearImmediate: function() {},
    clearInterval: function() {},
    clearTimeout: function() {},
    componentDidMount: function() {},
    componentDidUpdate: function() {},
    componentWillMount: function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount: function() {},
    componentWillUpdate: function() {},
    constructor: function() {},
    contextTypes: function() {},
    flashScrollIndicators: function() {},
    forceUpdate: function() {},
    getChildContext: function() {},
    getDefaultProps: function() {},
    getInitialState: function() {},
    getInnerViewNode: function() {},
    getMetrics: function() {},
    getScrollResponder: function() {},
    getScrollableNode: function() {},
    isMounted: function() {},
    isReactComponent: function() {},
    mixins: function() {},
    propTypes: function() {},
    render: function() {},
    replaceState: function() {},
    requestAnimationFrame: function() {},
    scrollProperties: function() {},
    scrollResponderFlashScrollIndicators: function() {},
    scrollResponderGetScrollableNode: function() {},
    scrollResponderHandleMomentumScrollBegin: function() {},
    scrollResponderHandleMomentumScrollEnd: function() {},
    scrollResponderHandleResponderGrant: function() {},
    scrollResponderHandleResponderReject: function() {},
    scrollResponderHandleResponderRelease: function() {},
    scrollResponderHandleScroll: function() {},
    scrollResponderHandleScrollBeginDrag: function() {},
    scrollResponderHandleScrollEndDrag: function() {},
    scrollResponderHandleScrollShouldSetResponder: function() {},
    scrollResponderHandleStartShouldSetResponder: function() {},
    scrollResponderHandleStartShouldSetResponderCapture: function() {},
    scrollResponderHandleTerminationRequest: function() {},
    scrollResponderHandleTouchEnd: function() {},
    scrollResponderHandleTouchMove: function() {},
    scrollResponderHandleTouchStart: function() {},
    scrollResponderInputMeasureAndScrollToKeyboard: function() {},
    scrollResponderIsAnimating: function() {},
    scrollResponderKeyboardDidHide: function() {},
    scrollResponderKeyboardDidShow: function() {},
    scrollResponderKeyboardWillHide: function() {},
    scrollResponderKeyboardWillShow: function() {},
    scrollResponderMixinGetInitialState: function() {},
    scrollResponderScrollNativeHandleToKeyboard: function() {},
    scrollResponderScrollTo: function() {},
    scrollResponderScrollToEnd: function() {},
    scrollResponderScrollWithoutAnimationTo: function() {},
    scrollResponderTextInputFocusError: function() {},
    scrollResponderZoomTo: function() {},
    scrollTo: function() {},
    scrollToEnd: function() {},
    setImmediate: function() {},
    setInterval: function() {},
    setNativeProps: function() {},
    setState: function() {},
    setTimeout: function() {},
    shouldComponentUpdate: function() {},
    statics: function() {},
    updateComponent: function() {}
};
ReactNative.Modal.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.NavigatorIOS.prototype = {
    __reactAutoBindPairs: function() {},
    _disableTVEventHandler: function() {},
    _eliminateUnneededChildren: function() {},
    _enableTVEventHandler: function() {},
    _focusEmitter: function() {},
    _getFocusEmitter: function() {},
    _handleFocusRequest: function() {},
    _handleNavigationComplete: function() {},
    _handleNavigatorStackChanged: function() {},
    _renderNavigationStackItems: function() {},
    _routeToStackItem: function() {},
    _toFocusOnNavigationComplete: function() {},
    _tryLockNavigator: function() {},
    _tvEventHandler: function() {},
    childContextTypes: function() {},
    componentDidMount: function() {},
    componentDidUpdate: function() {},
    componentWillMount: function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount: function() {},
    componentWillUpdate: function() {},
    constructor: function() {},
    contextTypes: function() {},
    forceUpdate: function() {},
    getChildContext: function() {},
    getDefaultProps: function() {},
    getInitialState: function() {},
    isMounted: function() {},
    isReactComponent: function() {},
    mixins: function() {},
    navigator: function() {},
    pop: function() {},
    popN: function() {},
    popToRoute: function() {},
    popToTop: function() {},
    propTypes: function() {},
    push: function() {},
    render: function() {},
    replace: function() {},
    replaceAtIndex: function() {},
    replacePrevious: function() {},
    replacePreviousAndPop: function() {},
    replaceState: function() {},
    resetTo: function() {},
    setState: function() {},
    shouldComponentUpdate: function() {},
    statics: function() {},
    updateComponent: function() {}
};
ReactNative.Picker.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.Picker.Item.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.PickerIOS.prototype = {
    __reactAutoBindPairs: function() {},
    _onChange: function() {},
    _stateFromProps: function() {},
    blur: function() {},
    childContextTypes: function() {},
    componentDidMount: function() {},
    componentDidUpdate: function() {},
    componentWillMount: function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount: function() {},
    componentWillUpdate: function() {},
    constructor: function() {},
    contextTypes: function() {},
    focus: function() {},
    forceUpdate: function() {},
    getChildContext: function() {},
    getDefaultProps: function() {},
    getInitialState: function() {},
    isMounted: function() {},
    isReactComponent: function() {},
    measure: function() {},
    measureInWindow: function() {},
    measureLayout: function() {},
    mixins: function() {},
    propTypes: function() {},
    render: function() {},
    replaceState: function() {},
    setNativeProps: function() {},
    setState: function() {},
    shouldComponentUpdate: function() {},
    statics: function() {},
    updateComponent: function() {}
};
ReactNative.PickerIOS.Item.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.ProgressBarAndroid.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.ProgressViewIOS.prototype = {
    __reactAutoBindPairs: function() {},
    blur: function() {},
    childContextTypes: function() {},
    componentDidMount: function() {},
    componentDidUpdate: function() {},
    componentWillMount: function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount: function() {},
    componentWillUpdate: function() {},
    constructor: function() {},
    contextTypes: function() {},
    focus: function() {},
    forceUpdate: function() {},
    getChildContext: function() {},
    getDefaultProps: function() {},
    getInitialState: function() {},
    isMounted: function() {},
    isReactComponent: function() {},
    measure: function() {},
    measureInWindow: function() {},
    measureLayout: function() {},
    mixins: function() {},
    propTypes: function() {},
    render: function() {},
    replaceState: function() {},
    setNativeProps: function() {},
    setState: function() {},
    shouldComponentUpdate: function() {},
    statics: function() {},
    updateComponent: function() {}
};
ReactNative.RefreshControl.prototype = {
    __reactAutoBindPairs: function() {},
    _lastNativeRefreshing: function() {},
    _nativeRef: function() {},
    _onRefresh: function() {},
    blur: function() {},
    childContextTypes: function() {},
    componentDidMount: function() {},
    componentDidUpdate: function() {},
    componentWillMount: function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount: function() {},
    componentWillUpdate: function() {},
    constructor: function() {},
    contextTypes: function() {},
    focus: function() {},
    forceUpdate: function() {},
    getChildContext: function() {},
    getDefaultProps: function() {},
    getInitialState: function() {},
    isMounted: function() {},
    isReactComponent: function() {},
    measure: function() {},
    measureInWindow: function() {},
    measureLayout: function() {},
    mixins: function() {},
    propTypes: function() {},
    render: function() {},
    replaceState: function() {},
    setNativeProps: function() {},
    setState: function() {},
    shouldComponentUpdate: function() {},
    statics: function() {},
    updateComponent: function() {}
};
ReactNative.ScrollView.prototype = {
    __reactAutoBindPairs: function() {},
    _getKeyForIndex: function() {},
    _handleContentOnLayout: function() {},
    _handleScroll: function() {},
    _headerLayoutYs: function() {},
    _innerViewRef: function() {},
    _onStickyHeaderLayout: function() {},
    _scrollAnimatedValue: function() {},
    _scrollAnimatedValueAttachment: function() {},
    _scrollViewRef: function() {},
    _setInnerViewRef: function() {},
    _setScrollViewRef: function() {},
    _setStickyHeaderRef: function() {},
    _stickyHeaderRefs: function() {},
    _updateAnimatedNodeAttachment: function() {},
    addListenerOn: function() {},
    childContextTypes: function() {},
    componentDidMount: function() {},
    componentDidUpdate: function() {},
    componentWillMount: function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount: function() {},
    componentWillUpdate: function() {},
    constructor: function() {},
    contextTypes: function() {},
    flashScrollIndicators: function() {},
    forceUpdate: function() {},
    getChildContext: function() {},
    getDefaultProps: function() {},
    getInitialState: function() {},
    getInnerViewNode: function() {},
    getScrollResponder: function() {},
    getScrollableNode: function() {},
    isMounted: function() {},
    isReactComponent: function() {},
    mixins: function() {},
    propTypes: function() {},
    render: function() {},
    replaceState: function() {},
    scrollResponderFlashScrollIndicators: function() {},
    scrollResponderGetScrollableNode: function() {},
    scrollResponderHandleMomentumScrollBegin: function() {},
    scrollResponderHandleMomentumScrollEnd: function() {},
    scrollResponderHandleResponderGrant: function() {},
    scrollResponderHandleResponderReject: function() {},
    scrollResponderHandleResponderRelease: function() {},
    scrollResponderHandleScroll: function() {},
    scrollResponderHandleScrollBeginDrag: function() {},
    scrollResponderHandleScrollEndDrag: function() {},
    scrollResponderHandleScrollShouldSetResponder: function() {},
    scrollResponderHandleStartShouldSetResponder: function() {},
    scrollResponderHandleStartShouldSetResponderCapture: function() {},
    scrollResponderHandleTerminationRequest: function() {},
    scrollResponderHandleTouchEnd: function() {},
    scrollResponderHandleTouchMove: function() {},
    scrollResponderHandleTouchStart: function() {},
    scrollResponderInputMeasureAndScrollToKeyboard: function() {},
    scrollResponderIsAnimating: function() {},
    scrollResponderKeyboardDidHide: function() {},
    scrollResponderKeyboardDidShow: function() {},
    scrollResponderKeyboardWillHide: function() {},
    scrollResponderKeyboardWillShow: function() {},
    scrollResponderMixinGetInitialState: function() {},
    scrollResponderScrollNativeHandleToKeyboard: function() {},
    scrollResponderScrollTo: function() {},
    scrollResponderScrollToEnd: function() {},
    scrollResponderScrollWithoutAnimationTo: function() {},
    scrollResponderTextInputFocusError: function() {},
    scrollResponderZoomTo: function() {},
    scrollTo: function() {},
    scrollToEnd: function() {},
    scrollWithoutAnimationTo: function() {},
    setNativeProps: function() {},
    setState: function() {},
    shouldComponentUpdate: function() {},
    statics: function() {},
    updateComponent: function() {}
};
ReactNative.SectionList.prototype = {
    constructor: function() {},
    forceUpdate: function() {},
    isPureReactComponent: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.SegmentedControlIOS.prototype = {
    __reactAutoBindPairs: function() {},
    _onChange: function() {},
    blur: function() {},
    childContextTypes: function() {},
    componentDidMount: function() {},
    componentDidUpdate: function() {},
    componentWillMount: function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount: function() {},
    componentWillUpdate: function() {},
    constructor: function() {},
    contextTypes: function() {},
    focus: function() {},
    forceUpdate: function() {},
    getChildContext: function() {},
    getDefaultProps: function() {},
    getInitialState: function() {},
    isMounted: function() {},
    isReactComponent: function() {},
    measure: function() {},
    measureInWindow: function() {},
    measureLayout: function() {},
    mixins: function() {},
    propTypes: function() {},
    render: function() {},
    replaceState: function() {},
    setNativeProps: function() {},
    setState: function() {},
    shouldComponentUpdate: function() {},
    statics: function() {},
    updateComponent: function() {}
};
ReactNative.Slider.prototype = {
    __reactAutoBindPairs: function() {},
    blur: function() {},
    childContextTypes: function() {},
    componentDidMount: function() {},
    componentDidUpdate: function() {},
    componentWillMount: function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount: function() {},
    componentWillUpdate: function() {},
    constructor: function() {},
    contextTypes: function() {},
    focus: function() {},
    forceUpdate: function() {},
    getChildContext: function() {},
    getDefaultProps: function() {},
    getInitialState: function() {},
    isMounted: function() {},
    isReactComponent: function() {},
    measure: function() {},
    measureInWindow: function() {},
    measureLayout: function() {},
    mixins: function() {},
    propTypes: function() {},
    render: function() {},
    replaceState: function() {},
    setNativeProps: function() {},
    setState: function() {},
    shouldComponentUpdate: function() {},
    statics: function() {},
    updateComponent: function() {},
    viewConfig: function() {}
};
ReactNative.SnapshotViewIOS.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.StatusBar.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.SwipeableListView.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.Switch.prototype = {
    __reactAutoBindPairs: function() {},
    _onChange: function() {},
    _rctSwitch: function() {},
    blur: function() {},
    childContextTypes: function() {},
    componentDidMount: function() {},
    componentDidUpdate: function() {},
    componentWillMount: function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount: function() {},
    componentWillUpdate: function() {},
    constructor: function() {},
    contextTypes: function() {},
    focus: function() {},
    forceUpdate: function() {},
    getChildContext: function() {},
    getDefaultProps: function() {},
    getInitialState: function() {},
    isMounted: function() {},
    isReactComponent: function() {},
    measure: function() {},
    measureInWindow: function() {},
    measureLayout: function() {},
    mixins: function() {},
    propTypes: function() {},
    render: function() {},
    replaceState: function() {},
    setNativeProps: function() {},
    setState: function() {},
    shouldComponentUpdate: function() {},
    statics: function() {},
    updateComponent: function() {}
};
ReactNative.TVEventHandler.prototype = {
    disable: function() {},
    enable: function() {}
};
ReactNative.TabBarIOS.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.TabBarIOS.Item.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.Text.prototype = {
    __reactAutoBindPairs: function() {},
    _handlers: function() {},
    _hasPressHandler: function() {},
    blur: function() {},
    childContextTypes: function() {},
    componentDidMount: function() {},
    componentDidUpdate: function() {},
    componentWillMount: function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount: function() {},
    componentWillUpdate: function() {},
    constructor: function() {},
    contextTypes: function() {},
    focus: function() {},
    forceUpdate: function() {},
    getChildContext: function() {},
    getDefaultProps: function() {},
    getInitialState: function() {},
    isMounted: function() {},
    isReactComponent: function() {},
    measure: function() {},
    measureInWindow: function() {},
    measureLayout: function() {},
    mixins: function() {},
    propTypes: function() {},
    render: function() {},
    replaceState: function() {},
    setNativeProps: function() {},
    setState: function() {},
    shouldComponentUpdate: function() {},
    statics: function() {},
    touchableGetPressRectOffset: function() {},
    touchableHandleActivePressIn: function() {},
    touchableHandleActivePressOut: function() {},
    touchableHandleLongPress: function() {},
    touchableHandlePress: function() {},
    updateComponent: function() {},
    viewConfig: function() {}
};
ReactNative.TextInput.prototype = {
    __reactAutoBindPairs: function() {},
    _focusSubscription: function() {},
    _getText: function() {},
    _inputRef: function() {},
    _lastNativeSelection: function() {},
    _lastNativeText: function() {},
    _onBlur: function() {},
    _onChange: function() {},
    _onFocus: function() {},
    _onPress: function() {},
    _onScroll: function() {},
    _onSelectionChange: function() {},
    _onTextInput: function() {},
    _renderAndroid: function() {},
    _renderIOS: function() {},
    _setNativeRef: function() {},
    blur: function() {},
    cancelAnimationFrame: function() {},
    childContextTypes: function() {},
    clear: function() {},
    clearImmediate: function() {},
    clearInterval: function() {},
    clearTimeout: function() {},
    componentDidMount: function() {},
    componentDidUpdate: function() {},
    componentWillMount: function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount: function() {},
    componentWillUpdate: function() {},
    constructor: function() {},
    contextTypes: function() {},
    focus: function() {},
    forceUpdate: function() {},
    getChildContext: function() {},
    getDefaultProps: function() {},
    getInitialState: function() {},
    isFocused: function() {},
    isMounted: function() {},
    isReactComponent: function() {},
    measure: function() {},
    measureInWindow: function() {},
    measureLayout: function() {},
    mixins: function() {},
    propTypes: function() {},
    render: function() {},
    replaceState: function() {},
    requestAnimationFrame: function() {},
    setImmediate: function() {},
    setInterval: function() {},
    setNativeProps: function() {},
    setState: function() {},
    setTimeout: function() {},
    shouldComponentUpdate: function() {},
    statics: function() {},
    updateComponent: function() {}
};
ReactNative.ToolbarAndroid.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.TouchableHighlight.prototype = {
    __reactAutoBindPairs: function() {},
    _cancelLongPressDelayTimeout: function() {},
    _computeSyntheticState: function() {},
    _endHighlight: function() {},
    _getDistanceBetweenPoints: function() {},
    _handleDelay: function() {},
    _handleLongDelay: function() {},
    _handleQueryLayout: function() {},
    _hasPressHandler: function() {},
    _hideUnderlay: function() {},
    _isHighlight: function() {},
    _performSideEffectsForTransition: function() {},
    _receiveSignal: function() {},
    _remeasureMetricsOnActivation: function() {},
    _savePressInLocation: function() {},
    _showUnderlay: function() {},
    _startHighlight: function() {},
    blur: function() {},
    cancelAnimationFrame: function() {},
    childContextTypes: function() {},
    clearImmediate: function() {},
    clearInterval: function() {},
    clearTimeout: function() {},
    componentDidMount: function() {},
    componentDidUpdate: function() {},
    componentWillMount: function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount: function() {},
    componentWillUpdate: function() {},
    constructor: function() {},
    contextTypes: function() {},
    focus: function() {},
    forceUpdate: function() {},
    getChildContext: function() {},
    getDefaultProps: function() {},
    getInitialState: function() {},
    isMounted: function() {},
    isReactComponent: function() {},
    measure: function() {},
    measureInWindow: function() {},
    measureLayout: function() {},
    mixins: function() {},
    propTypes: function() {},
    render: function() {},
    replaceState: function() {},
    requestAnimationFrame: function() {},
    setImmediate: function() {},
    setInterval: function() {},
    setNativeProps: function() {},
    setState: function() {},
    setTimeout: function() {},
    shouldComponentUpdate: function() {},
    statics: function() {},
    touchableGetHighlightDelayMS: function() {},
    touchableGetHitSlop: function() {},
    touchableGetInitialState: function() {},
    touchableGetLongPressDelayMS: function() {},
    touchableGetPressOutDelayMS: function() {},
    touchableGetPressRectOffset: function() {},
    touchableHandleActivePressIn: function() {},
    touchableHandleActivePressOut: function() {},
    touchableHandleLongPress: function() {},
    touchableHandlePress: function() {},
    touchableHandleResponderGrant: function() {},
    touchableHandleResponderMove: function() {},
    touchableHandleResponderRelease: function() {},
    touchableHandleResponderTerminate: function() {},
    touchableHandleResponderTerminationRequest: function() {},
    touchableHandleStartShouldSetResponder: function() {},
    touchableLongPressCancelsPress: function() {},
    updateComponent: function() {},
    viewConfig: function() {}
};
ReactNative.TouchableNativeFeedback.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.TouchableOpacity.prototype = {
    __reactAutoBindPairs: function() {},
    _cancelLongPressDelayTimeout: function() {},
    _endHighlight: function() {},
    _getChildStyleOpacityWithDefault: function() {},
    _getDistanceBetweenPoints: function() {},
    _handleDelay: function() {},
    _handleLongDelay: function() {},
    _handleQueryLayout: function() {},
    _isHighlight: function() {},
    _opacityActive: function() {},
    _opacityFocused: function() {},
    _opacityInactive: function() {},
    _performSideEffectsForTransition: function() {},
    _receiveSignal: function() {},
    _remeasureMetricsOnActivation: function() {},
    _savePressInLocation: function() {},
    _startHighlight: function() {},
    blur: function() {},
    cancelAnimationFrame: function() {},
    childContextTypes: function() {},
    clearImmediate: function() {},
    clearInterval: function() {},
    clearTimeout: function() {},
    componentDidMount: function() {},
    componentDidUpdate: function() {},
    componentWillMount: function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount: function() {},
    componentWillUpdate: function() {},
    constructor: function() {},
    contextTypes: function() {},
    focus: function() {},
    forceUpdate: function() {},
    getChildContext: function() {},
    getDefaultProps: function() {},
    getInitialState: function() {},
    isMounted: function() {},
    isReactComponent: function() {},
    measure: function() {},
    measureInWindow: function() {},
    measureLayout: function() {},
    mixins: function() {},
    propTypes: function() {},
    render: function() {},
    replaceState: function() {},
    requestAnimationFrame: function() {},
    setImmediate: function() {},
    setInterval: function() {},
    setNativeProps: function() {},
    setOpacityTo: function() {},
    setState: function() {},
    setTimeout: function() {},
    shouldComponentUpdate: function() {},
    statics: function() {},
    touchableGetHighlightDelayMS: function() {},
    touchableGetHitSlop: function() {},
    touchableGetInitialState: function() {},
    touchableGetLongPressDelayMS: function() {},
    touchableGetPressOutDelayMS: function() {},
    touchableGetPressRectOffset: function() {},
    touchableHandleActivePressIn: function() {},
    touchableHandleActivePressOut: function() {},
    touchableHandleLongPress: function() {},
    touchableHandlePress: function() {},
    touchableHandleResponderGrant: function() {},
    touchableHandleResponderMove: function() {},
    touchableHandleResponderRelease: function() {},
    touchableHandleResponderTerminate: function() {},
    touchableHandleResponderTerminationRequest: function() {},
    touchableHandleStartShouldSetResponder: function() {},
    touchableLongPressCancelsPress: function() {},
    updateComponent: function() {}
};
ReactNative.TouchableWithoutFeedback.prototype = {
    __reactAutoBindPairs: function() {},
    _cancelLongPressDelayTimeout: function() {},
    _endHighlight: function() {},
    _getDistanceBetweenPoints: function() {},
    _handleDelay: function() {},
    _handleLongDelay: function() {},
    _handleQueryLayout: function() {},
    _isHighlight: function() {},
    _performSideEffectsForTransition: function() {},
    _receiveSignal: function() {},
    _remeasureMetricsOnActivation: function() {},
    _savePressInLocation: function() {},
    _startHighlight: function() {},
    cancelAnimationFrame: function() {},
    childContextTypes: function() {},
    clearImmediate: function() {},
    clearInterval: function() {},
    clearTimeout: function() {},
    componentDidMount: function() {},
    componentDidUpdate: function() {},
    componentWillMount: function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount: function() {},
    componentWillUpdate: function() {},
    constructor: function() {},
    contextTypes: function() {},
    forceUpdate: function() {},
    getChildContext: function() {},
    getDefaultProps: function() {},
    getInitialState: function() {},
    isMounted: function() {},
    isReactComponent: function() {},
    mixins: function() {},
    propTypes: function() {},
    render: function() {},
    replaceState: function() {},
    requestAnimationFrame: function() {},
    setImmediate: function() {},
    setInterval: function() {},
    setState: function() {},
    setTimeout: function() {},
    shouldComponentUpdate: function() {},
    statics: function() {},
    touchableGetHighlightDelayMS: function() {},
    touchableGetHitSlop: function() {},
    touchableGetInitialState: function() {},
    touchableGetLongPressDelayMS: function() {},
    touchableGetPressOutDelayMS: function() {},
    touchableGetPressRectOffset: function() {},
    touchableHandleActivePressIn: function() {},
    touchableHandleActivePressOut: function() {},
    touchableHandleLongPress: function() {},
    touchableHandlePress: function() {},
    touchableHandleResponderGrant: function() {},
    touchableHandleResponderMove: function() {},
    touchableHandleResponderRelease: function() {},
    touchableHandleResponderTerminate: function() {},
    touchableHandleResponderTerminationRequest: function() {},
    touchableHandleStartShouldSetResponder: function() {},
    touchableLongPressCancelsPress: function() {},
    updateComponent: function() {}
};
ReactNative.View.prototype = {
    __reactAutoBindPairs: function() {},
    blur: function() {},
    childContextTypes: function() {},
    componentDidMount: function() {},
    componentDidUpdate: function() {},
    componentWillMount: function() {},
    componentWillReceiveProps: function() {},
    componentWillUnmount: function() {},
    componentWillUpdate: function() {},
    constructor: function() {},
    contextTypes: function() {},
    focus: function() {},
    forceUpdate: function() {},
    getChildContext: function() {},
    getDefaultProps: function() {},
    getInitialState: function() {},
    isMounted: function() {},
    isReactComponent: function() {},
    measure: function() {},
    measureInWindow: function() {},
    measureLayout: function() {},
    mixins: function() {},
    propTypes: function() {},
    render: function() {},
    replaceState: function() {},
    setNativeProps: function() {},
    setState: function() {},
    shouldComponentUpdate: function() {},
    statics: function() {},
    updateComponent: function() {},
    viewConfig: function() {}
};
ReactNative.ViewPagerAndroid.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.VirtualizedList.prototype = {
    constructor: function() {},
    forceUpdate: function() {},
    isPureReactComponent: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
ReactNative.WebView.prototype = {
    forceUpdate: function() {},
    isReactComponent: function() {},
    setState: function() {}
};
// Manually-added Navigator
var Navigator = {
    getCurrentRoutes: function() {},
    jumpBack: function() {},
    jumpForward: function() {},
    jumpTo: function() {},
    push: function() {},
    pop: function() {},
    replace: function() {},
    replaceAtIndex: function() {},
    replacePrevious: function() {},
    immediatelyResetRouteStack: function() {},
    popToRoute: function() {},
    popToTop: function() {}
};
// Manually-added properties on CameraRoll
var CameraRoll = {
    saveImageWithTag: function() {},
    getPhotos: function() {}
};
// Manually added IntentAndroid
var IntentAndroid = {
    openURL: function() {},
    canOpenURL: function() {},
    getInitialURL: function() {}
};
// Manually added LinkingIOS
var LinkingIOS = {
    addEventListener: function() {},
    removeEventListener: function() {},
    openURL: function() {},
    canOpenURL: function() {},
    popInitialURL: function() {}
};
// Manually added PixelRatio
var PixelRatio = {
    get: function() {},
    getFontScale: function() {},
    getPixelSizeForLayoutSize: function() {},
    startDetecting: function() {}
};
// Manually added PushNotificationIOS
var PushNotificationIOS = {
    presentLocalNotification: function() {},
    scheduleLocalNotification: function() {},
    cancelAllLocalNotifications: function() {},
    setApplicationIconBadgeNumber: function() {},
    getApplicationIconBadgeNumber: function() {},
    addEventListener: function() {},
    requestPermissions: function() {},
    abandonPermissions: function() {},
    checkPermissions: function() {},
    alert: {},
    badge: {},
    sound: {},
    removeEventListener: function() {},
    popInitialNotification: function() {},
    getMessage: function() {},
    getSound: function() {},
    getAlert: function() {},
    getBadgeCount: function() {},
    getData: function() {}
};
// Manually added ToastAndroid
var ToastAndroid = {
    show: function() {},
    SHORT: {},
    LONG: {}
};
// Manually added geolocation
var geolocation = {
    getCurrentPosition: function() {},
    watchPosition: function() {},
    clearWatch: function() {},
    stopObserving: function() {}
};
// Classes. These are generated using code like:
// (println (javascript-externs-generator.extern/extract "AnimatedValue" (new rn/Animated.Value))
// (clojure.string/join ",\n" (map (fn [n] (str n ": function() {}")) (sort (js->clj (js/Object.getOwnPropertyNames (js/Object.getPrototypeOf (new rn/Animated.Value)))))))
var AnimatedValue = {
    _animation: {},
    _children: {},
    _listeners: {},
    _offset: {},
    _startingValue: {},
    _value: {},
    __detach: function() {},
    __getNativeConfig: function() {},
    __getValue: function() {},
    __makeNative: function() {},
    _startListeningToNativeValueUpdates: function() {},
    _stopListeningForNativeValueUpdates: function() {},
    _updateValue: function() {},
    addListener: function() {},
    animate: function() {},
    constructor: function() {},
    extractOffset: function() {},
    flattenOffset: function() {},
    interpolate: function() {},
    removeAllListeners: function() {},
    removeListener: function() {},
    resetAnimation: function() {},
    setOffset: function() {},
    setValue: function() {},
    stopAnimation: function() {},
    stopTracking: function() {},
    track: function() {}
};
var AnimatedValueXY = {
    _children: {},
    _listeners: {},
    x: {
        _animation: {},
        _children: {},
        _listeners: {},
        _offset: {},
        _startingValue: {},
        _value: {}
    },
    y: {
        _animation: {},
        _children: {},
        _listeners: {},
        _offset: {},
        _startingValue: {},
        _value: {}
    },
    __getValue: function() {},
    addListener: function() {},
    constructor: function() {},
    extractOffset: function() {},
    flattenOffset: function() {},
    getLayout: function() {},
    getTranslateTransform: function() {},
    removeAllListeners: function() {},
    removeListener: function() {},
    resetAnimation: function() {},
    setOffset: function() {},
    setValue: function() {},
    stopAnimation: function() {}
};
var ListViewDataSource = {
    _cachedRowCount: {},
    _dataBlob: {},
    _dirtyRows: {},
    _dirtySections: {},
    _getRowData: function() {},
    _getSectionHeaderData: function() {},
    _rowHasChanged: function() {},
    _sectionHeaderHasChanged: {},
    rowIdentities: {},
    sectionIdentities: {},
    _calculateDirtyArrays: function() {},
    cloneWithRows: function() {},
    cloneWithRowsAndSections: function() {},
    constructor: function() {},
    getRowAndSectionCount: function() {},
    getRowCount: function() {},
    getRowData: function() {},
    getRowIDForFlatIndex: function() {},
    getSectionHeaderData: function() {},
    getSectionIDForFlatIndex: function() {},
    getSectionLengths: function() {},
    rowShouldUpdate: function() {},
    sectionHeaderShouldUpdate: function() {}
};
// Static fns
// (clojure.string/join ",\n" (map (fn [n] (str n ": function() {}")) (sort (js->clj (js/Object.getOwnPropertyNames rn/Easing)))))
var Easing = {
    back: function() {},
    bezier: function() {},
    bounce: function() {},
    circle: function() {},
    cubic: function() {},
    ease: function() {},
    elastic: function() {},
    exp: function() {},
    in: function() {},
    inOut: function() {},
    length: function() {},
    linear: function() {},
    name: function() {},
    out: function() {},
    poly: function() {},
    prototype: function() {},
    quad: function() {},
    sin: function() {},
    step0: function() {},
    step1: function() {}
};
/**********************************************************************
 * End Generated Extern for ReactNative
 /**********************************************************************/
