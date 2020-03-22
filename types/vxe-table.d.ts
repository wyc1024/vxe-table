import Vue from 'vue'

import { ModalController } from './modal'

import { renderer } from './extends/renderer'
import { interceptor } from './extends/interceptor'
import { commands } from './extends/commands'
import { formats } from './extends/formats'
import { menus } from './extends/menus'

export interface VXETableOptions {
  i18n?(key: string, value: any): any;
  [key: string]: any;
}

export interface VXETableStatic {
  install(vue: typeof Vue): void;
  Vue: typeof Vue;
  Table: any;
  Grid: any;
  /**
   * 全局的模态窗口
   */
  $modal: ModalController;
  /**
   * 版本号
   */
  v: string;
  /**
   * 导出/导出文件类型设置
   * 0只支持导出 1 支持导入导出
   */
  types: { [type: string]: any };
  /**
   * 获取导出的所有文件类型
   */
  exportTypes: string[];
  /**
   * 获取导入的所有文件类型
   */
  importTypes: string[];
  /**
   * 读取内置国际化
   */
  t(key: string): any;
  /**
   * 设置全局参数/获取所有参数
   * @param options 参数
   */
  setup(options?: VXETableOptions): any;
  /**
   * 安装插件
   * @param plugin 插件
   * @param options 参数
   */
  use(plugin: PluginObject<any>, ...options: any[]): VXETableStatic;
  /**
   * 全局事件拦截器
   */
  interceptor: interceptor;
  /**
   * 全局渲染器
   */
  renderer: renderer;
  /**
   * 全局指令
   */
  commands: commands;
  /**
   * 全局格式化
   */
  formats: formats;
  /**
   * 全局快捷菜单
   */
  menus: menus;
}

/**
 * 一个简单实用的 Vue 表组件
 */
export declare const VXETable: VXETableStatic

export interface PluginObject<T> {
  install(xTable: typeof VXETable): any;
}

declare global {
  interface Window {
    VXETable: VXETableStatic;
  }
}

export * from './table'
export * from './column'
export * from './grid'
export * from './toolbar'
export * from './pager'
export * from './checkbox'
export * from './radio'
export * from './input'
export * from './textarea'
export * from './button'
export * from './select'
export * from './modal'
export * from './tooltip'
export * from './form'

export * from './extends/renderer'
export * from './extends/interceptor'
export * from './extends/commands'
export * from './extends/formats'
export * from './extends/menus'
export * from './extends/header'
export * from './extends/footer'
export * from './extends/icon'
export * from './extends/filter'
export * from './extends/menu'
export * from './extends/edit'
export * from './extends/export'
export * from './extends/keyboard'
export * from './extends/validator'
export * from './extends/resize'

export default VXETable
