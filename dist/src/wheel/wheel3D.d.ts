import { MyJQuery } from 'my-jquery/types/MyJQuery';
import { IWheel } from '../IWheel';
import { Col } from '../Col';
import { Picker } from '../Picker';
import { IOptions } from '../IOptions';
export declare class Wheel3D implements IWheel {
    private picker;
    private option;
    private index;
    private dom;
    private contains;
    private maxAngle;
    private minAngle;
    private radius;
    private visibleAngle;
    private em;
    private offsetTop;
    private originalAngle;
    private lastIndexAngle;
    private changeMaxAngle;
    private angle;
    private selectedIndex;
    private selectedValue;
    private animationId;
    private speed;
    private timeStamp;
    private lastY;
    private isDraging;
    private audio;
    private list;
    private valueHashMap;
    private labelKey;
    private itemValueKey;
    private onSelectItemCallbackList;
    constructor(picker: Picker, col: Col, option: IOptions, index: number);
    /**
     * 开始拖拽
     * @param {number} offsetY  当前用户手指(鼠标)的y坐标
     */
    private startDrag(offsetY);
    /**
     * 拖拽
     * @param {number} offsetY			当前用户手指(鼠标)的y坐标
     */
    private drag(offsetY);
    /**
     * 拖拽结束
     */
    private endDrag();
    /**
     * 生成用户可选的标签
     * @param {any[]} list                  用户可选项数组
     * @param {*} selectedValue             默认值
     * @param {boolean} [isInti=false]      是否是初始化,初始化不执行设置默认值操作
     */
    setOptions(list: any[], selectedValue: any, isInti?: boolean): void;
    /**
    * 获得用户可选的标签
    */
    getOptions(): any[];
    /**
    * 给定指定标签的值,选择指定标签
    */
    selectOption(value: any, showAnimation?: boolean): void;
    /**
    * 给定指定备选标签的index,自动设定标签的各个位置
    * @param index					要选择的index
    * @param showAnimation			是否显示动画,如果显示动画,会用100帧来显示动画
    */
    private selectIndex(index, showAnimation?);
    /**
    * 给定指定角度,自动设定标签的各个位置
    * @param {number} angle		要转到的角度
    * @returns {number}			修正后的角度,即最终的实际角度
    */
    private setAngle(angle);
    /**
    * 通过角度计算被选项的id
    * @param angle {number}		要计算的角度
    * @returns {number}		    被选项id
    */
    private calcSelectedIndexByAngle(angle);
    /**
    * 通过角度计算被选项的id
    * @param angle {number}		要计算的角度
    * @returns {number}		    被选项id
    */
    private calcAngleBySelectedIndex(index);
    /**
    * 限制转角超过极限值
    * @param angle {number}		要计算的角度
    * @returns {number}		    被选项id
    */
    private rangeAngle(angle);
    /**
    * 刷新各个标签的状态,确定应该显示哪些标签
    */
    private flushLabel();
    /**
    * 获取被选值
    */
    getValue(): any;
    /**
    * 设置后缀
    * @param text			后缀显示的文本
    */
    private setSuffix(text);
    /**
    * 设置前缀
    * @param text			前缀显示的文本
    */
    private setPrefix(text);
    /**
    * 触发回调函数的接口
    * @param index			当前被选值的索引
    * @param value			当前被选值的值
    */
    private toggleSelected(index, value);
    /**
     * 注册SelectItem的回调事件
     * @param {{(index:number, value:any):void}} fn
     */
    addSelectItemListener(fn: {
        (index: number, value: any): void;
    }): void;
    /**
     * 移除注册的SelectItem回调事件
     * @param {{(index:number, value:any):void}} fn
     */
    removeSelectItemListener(fn: {
        (index: number, value: any): void;
    }): void;
    /**
     * 销毁
     */
    destroy(): void;
    getDOM(): MyJQuery;
}
