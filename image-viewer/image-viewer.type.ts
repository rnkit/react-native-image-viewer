import * as React from 'react'
import * as ReactNative from 'react-native'

export interface PropsDefine extends ReactNative.ViewProperties {
    /**
     * 图片数组
     */
    imageUrls: Array<ImageInfo>

    /**
     * 是否开启图片手势功能
     */
    enableImageZoom?: boolean

    /**
     * 弹出大图的回调
     */
    onShowModal?: (content?: JSX.Element)=>void

    /**
     * 取消看图的回调
     */
    onCancel?: ()=>void

    /**
     * 滑动到下一页的X阈值
     */
    flipThreshold?: number

    /**
     * 当前页能滑到下一页X位置最大值
     */
    maxOverflow?: number

    /**
     * 初始显示第几张图
     */
    index?: number

    /**
     * 加载失败的图
     */
    failImageSource?: string | {uri: string}

    /**
     * 渲染loading元素
     */
    loadingRender?: ()=> React.ReactElement<any>

    /**
     * 保存到相册的回调
     */
    onSaveToCamera?: (index?: number)=>void

    /**
     *
     */

    /**
     * 当图片切换时触发
     */
    onChange?: (index?: number)=>void

    /**
     * 是否开启长按保存到本地的功能
     */
    saveToLocalByLongPress?: boolean

    /**
     * 透传
     */
    others?: any

    /**
     * 单击回调
     */
    onClick?: (close?: Function)=>void

    /**
     * 双击回调
     */
    onDoubleClick?: (close?: Function)=>void

    /**
     * 图片保存到本地方法，如果写了这个方法，就不会调取系统默认方法
     * 针对安卓不支持 saveToCameraRoll 远程图片，可以在安卓调用此回调，调用安卓原生接口
     */
    onSave?: (url: string)=>void
}

export class PropsGaea {
    gaeaName = '大图浏览'
    gaeaIcon = 'square-o'
    gaeaUniqueKey = 'nt-image-viewer'
}

export class Props extends PropsGaea implements PropsDefine {
    show = false
    imageUrls = [] as Array<ImageInfo>
    enableImageZoom = true
    visible = false

    flipThreshold = 80
    maxOverflow = 300
    failImageSource = ''
    index = 0
    saveToLocalByLongPress = true

    onShowModal = () => {
    }

    onCancel = () => {
    }

    loadingRender = () => {
        return null as any
    }

    onSaveToCamera = () => {
    }

    onChange = () => {
    }

    onClick = (close?: Function) => {
        close()
    }

    onDoubleClick = (close?: Function) => {

    }
}

export interface StateDefine {
    /**
     * 是否显示
     */
    show?: boolean

    /**
     * 当前显示第几个
     */
    currentShowIndex?: number

    /**
     * 图片拉取是否完毕了
     */
    imageLoaded?: boolean

    /**
     * 图片长宽列表
     */
    imageSizes?: Array<ImageSize>

    /**
     * 是否出现功能菜单
     */
    isShowMenu?: boolean
}

export class State implements StateDefine {
    show = false
    currentShowIndex = 0
    imageSizes = [] as any
    isShowMenu = false
}

export interface ImageInfo {
    url: string
    /**
     * 没有的话会自动拉取
     */
    width?: number
    /**
     * 没有的话会自动拉取
     */
    height?: number
    /**
     * 图片字节大小(kb为单位)
     */
    sizeKb?: number
    /**
     * 原图字节大小(kb为单位)
     * 如果设置了这个字段,并且有原图url,则显示查看原图按钮
     */
    originSizeKb?: number
    /**
     * 原图url地址
     */
    originUrl?: string
}

export interface ImageSize {
    width: number
    height: number
    // 图片加载状态
    status: 'loading' | 'success' | 'fail'
}