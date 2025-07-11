import type { TreeSeriesOption } from "echarts/charts";
import type { EChartsOption, GraphSeriesOption } from "echarts";

const Vue2Systems = [
    {
        name: 'b2b前台项目',
        id: 'b2b-front',
    },
    {
        name: 'b2bmanager前台',
        id: 'b2b-manage',
    },
    {
        name: '海运系统（MMS）',
        id: 'mms',
    },
    {
        name: '财务数据平台(FDP)',
        id: 'fdp',
    },
    {
        name: '美国drp系统',
        id: 'us-drp',
    },
    {
        name: '报销系统(FNS)',
        id: 'fns',
    },
]

const Vue3Systems = [
    {
        name: 'Seller ERP 系统',
        id: 'seller-erp',
    },
    {
        name: '第三方物流系统（3PL）',
        id: '3pl',
    },
    {
        name: '美国订单运营系统（US_OHUB）',
        id: 'us-ohub',
    },
    {
        name: '日本订单发货系统（JP_DRP）',
        id: 'jp-drp',
    },
    {
        name: '欧洲订单发货系统（EUR_DRP）',
        id: 'eur-drp',
    },
    {
        name: '供应链管理系统（SCM）',
        id: 'scm',
    },
]
const yzcPackages = [
    {
        name: '@yzc/cli',
        id: 'yzc-cli',
    },
    {
        name: '@yzc/driver',
        id: 'yzc-driver',
    },
    {
        name: '@yzc/entrypoints-json',
        id: 'yzc-entrypoints',
    },
    {
        name: '@yzc/ast-tools',
        id: 'yzc-ast-tools',
    },
    {
        name: '@yzc/el-table-sticky-vue2',
        id: 'yzc-eltable-sticky',
    },
    {
        name: '@yzc/sticky-vue2',
        id: 'yzc-sticky-vue2',
    },
    {
        name: '@yzc/deploy-env',
        id: 'yzc-deploy-env',
    },

]

const gigaPackages = [
    {
        name: '@giga/utils',
        id: 'giga-utils',
    },
    {
        name: '@giga/hooks',
        id: 'giga-hooks',
    },
    {
        name: '@giga/directives',
        id: 'giga-directives',
    },
    {
        name: '@giga/select-vue2',
        id: 'giga-select-vue2',
    }
]

const Vue2SystemTrees: TreeSeriesOption["data"] = Vue2Systems.map((v) => {
    return {
        ...v,
        itemStyle: {
            borderColor: "#B62AFF",
            color: "#B62AFF",
        },
        label: {
            position: "bottom",
            rotate: -90,
            align: 'left',
            color: "#fff",
        },
        symbolSize: 30,
    };
});
const Vue3SystemTrees: TreeSeriesOption["data"] = Vue3Systems.map((v) => {
    return {
        ...v,
        itemStyle: {
            borderColor: "#B62AFF",
            color: "#B62AFF",
        },
        label: {
            position: "bottom",
            rotate: -90,
            align: 'left',
            color: "#fff",
        },
        symbolSize: 30,
    };
});
const giga: TreeSeriesOption["data"] = [
    {
        name: "@giga-ui/plus",
        children: Vue3SystemTrees,
    },
    {
        name: "@giga/directives",
        children: Vue3SystemTrees,
    },
    {
        name: "@giga-ui/select-vue2",
        children: Vue2SystemTrees,
    },
].map(v => ({
    ...v,
    label: {
        position: "inside",
    },
    itemStyle: {
        borderColor: "#1E90FF",
        color: "#1E90FF",
    },
    symbolSize: 100,
}));
const yzc: TreeSeriesOption["data"] = [
    {
        name: "@giga/utils",
        children: [...Vue2SystemTrees, ...Vue3SystemTrees],
    },
    {
        name: "@yzc/cli",
        children: [Vue2SystemTrees[0]],
    },
    {
        name: "@yzc/sticky-vue2",
        children: Vue2SystemTrees,
    },
    {
        name: "@yzc/el-table-sticky-vue2",
        children: Vue2SystemTrees,
    },
    {
        name: "@yzc/deploy-env",
        children: Vue2SystemTrees,
    },
].map(v => ({
    ...v,
    label: {
        position: "inside",
    },
    itemStyle: {
        borderColor: "#FF00AA",
        color: "#FF00AA",
    },
    symbolSize: 100,
}));
const data: TreeSeriesOption["data"] = [
    {
        name: "GiGa 前端工具链",
        label: {
            position: "inside",
        },
        itemStyle: {
            borderColor: "#00ADD0",
            color: "#00ADD0",
        },
        symbolSize: 180,
        children: [
            {
                name: "giga-ui",
                label: {
                    position: "inside",
                },
                itemStyle: {
                    borderColor: "#FFA12F",
                    color: "#FFA12F",
                },
                symbolSize: 150,
                children: giga,
            },
            {
                name: "yzc-framework",
                label: {
                    position: "inside",
                },
                itemStyle: {
                    borderColor: "#FFA12F",
                    color: "#FFA12F",
                },
                symbolSize: 150,
                children: yzc,
            },
        ],
    },
];
export const treeOption: EChartsOption = {
    grid: {
        top: '5%',
        bottom: '15%',
    },
    series: [
        {
            type: "tree",
            layout: "orthogonal",
            orient: "TB",
            symbol: "circle",
            symbolSize: 10,
            animationDurationUpdate: 1000,
            universalTransition: true,
            expandAndCollapse: false,
            initialTreeDepth: 2,
            roam: true,
            itemStyle: {
                borderWidth: 1,
            },
            leaves: {
                label: {
                    position: "bottom",
                    verticalAlign: "middle",
                    align: "center",
                },
            },
            label: {
                color: "#fff",
                fontSize: 14,
            },
            lineStyle: {
                width: 1,
                curveness: 0.5,
            },
            data: data,
            emphasis: {
                focus: "descendant",
            },
        },
    ],
}

export const graphOption: EChartsOption = {
    title: {
        text: 'Monorepo',
        left: 'center',
        textStyle: {
            color: '#fff'
        },
    },
    grid: {
        top: '5%',
        bottom: '15%',
    },
    series: [
        {
            name: 'Monorepo',
            type: 'graph',
            animationDurationUpdate: 1000,
            universalTransition: true,
            roam: true,
            label: {
                show: true,
                color: '#fff',
                position: 'right',
                formatter: '{b}'
            },
            labelLayout: {
                hideOverlap: true
            },
            scaleLimit: {
                min: 0.4,
                max: 2
            },
            lineStyle: {
                color: '#fff',
            },
            categories: [
                {
                    name: 'VUE2'
                },
                {
                    name: 'VUE3'
                },
                {
                    name: 'ui'
                },
                {
                    name: 'packages'
                }
            ],
            links: [
                ...Vue3Systems.flatMap(system => gigaPackages.filter(pkg => pkg.id !== 'giga-select-vue2').map(pkg => {
                    return {
                        source: system.id,
                        target: pkg.id
                    }
                })),
                ...Vue2Systems.flatMap(system => gigaPackages.filter(pkg => ['giga-select-vue2', 'giga-utils'].includes(pkg.id)).map(pkg => {
                    return {
                        source: system.id,
                        target: pkg.id
                    }
                })),
                ...Vue2Systems.flatMap(system => yzcPackages.filter(pkg => ['yzc-sticky-vue2', 'yzc-eltable-sticky'].includes(pkg.id)).map(pkg => {
                    return {
                        source: system.id,
                        target: pkg.id
                    }
                })),
                ...yzcPackages.map(pkg => ({
                    source: 'b2b-front',
                    target: pkg.id
                })),
                {
                    source: 'giga-ui',
                    target: 'giga-utils'
                },
                {
                    source: 'giga-ui',
                    target: 'giga-select-vue2'
                },
                {
                    source: 'giga-ui',
                    target: 'giga-directives'
                },
                {
                    source: 'giga-ui',
                    target: 'giga-hooks'
                },
                {
                    source: 'yzc-ast-tools',
                    target: 'yzc-babel'
                },
                {
                    source: 'yzc-compat',
                    target: 'yzc-babel'
                },
            ],

            data: [
                ...[...Vue2Systems, ...Vue3Systems].map(v => ({
                    ...v,
                    category: 0,
                    symbolSize: 30,
                })),
                ...[...yzcPackages, ...gigaPackages].map(v => ({
                    ...v,
                    category: 3,
                    symbolSize: 60,
                })),
                {
                    name: '@giga/ui',
                    id: 'giga-ui',
                    category: 2,
                    symbolSize: 100,
                },
            ].map((v, idx) => {
                return {
                    ...v,
                    symbolSize: v.symbolSize || 40,
                    value: 28.685715,
                    x: Math.random() * 60 * (Math.random() > 0.7 ? 1 : -1),
                    y: Math.random() * 30 * (Math.random() > 0.7 ? 1 : -1),
                }
            })
        }
    ]
}