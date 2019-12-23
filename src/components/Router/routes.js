import React from 'react';

//Lazily loaded Components
const AlertPage = React.lazy(() => import('pages/AlertPage'));
const AuthModalPage = React.lazy(() => import('pages/AuthModalPage'));
const BadgePage = React.lazy(() => import('pages/BadgePage'));
const ButtonGroupPage = React.lazy(() => import('pages/ButtonGroupPage'));
const ButtonPage = React.lazy(() => import('pages/ButtonPage'));
const CardPage = React.lazy(() => import('pages/CardPage'));
const ChartPage = React.lazy(() => import('pages/ChartPage'));
const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
const DropdownPage = React.lazy(() => import('pages/DropdownPage'));
const FormPage = React.lazy(() => import('pages/FormPage'));
const InputGroupPage = React.lazy(() => import('pages/InputGroupPage'));
const ModalPage = React.lazy(() => import('pages/ModalPage'));
const ProgressPage = React.lazy(() => import('pages/ProgressPage'));
const TablePage = React.lazy(() => import('pages/TablePage'));
const TitlePage = React.lazy(() => import('pages/TitlePage'));
const MenuPage = React.lazy(() => import('pages/MenuPage'));
const MenuEditPage = React.lazy(() => import('pages/MenuEditPage'));
const SectionPage = React.lazy(() => import('pages/section'));
const SectionAddPage = React.lazy(() => import('pages/section/AddSection'));
const TypographyPage = React.lazy(() => import('pages/TypographyPage'));
const WidgetPage = React.lazy(() => import('pages/WidgetPage'));

const routes = [
    {
        path : '/dashboard',
        auth : true,
        exact : true,
        component : DashboardPage
    },
    {
        path : '/login-modal',
        auth : true,
        exact : true,
        component : AuthModalPage
    },
    {
        path : '/buttons',
        auth : true,
        exact : true,
        component : ButtonPage
    },
    {
        path : '/cards',
        auth : true,
        exact : true,
        component : CardPage
    },
    {
        path : '/widgets',
        auth : true,
        exact : true,
        component : WidgetPage
    },
    {
        path : '/typography',
        auth : true,
        exact : true,
        component : TypographyPage
    },
    {
        path : '/alerts',
        auth : true,
        exact : true,
        component : AlertPage
    },
    {
        path : '/tables',
        auth : true,
        exact : true,
        component : TablePage
    },
    {
        path : '/title',
        auth : true,
        exact : true,
        component : TitlePage
    },
    {
        path : '/menu',
        auth : true,
        exact : true,
        component : MenuPage
    },
    {
        path : '/menu/edit',
        auth : true,
        exact : true,
        component : MenuEditPage
    },
    {
        path : '/sections',
        auth : true,
        exact : true,
        component : SectionPage
    },
    {
        path : '/sections/add',
        auth : true,
        exact : true,
        component : SectionAddPage
    },
    {
        path : '/badges',
        auth : true,
        exact : true,
        component : BadgePage
    },
    {
        path : '/button-groups',
        auth : true,
        exact : true,
        component : ButtonGroupPage
    },
    {
        path : '/dropdowns',
        auth : true,
        exact : true,
        component : DropdownPage
    },
    {
        path : '/progress',
        auth : true,
        exact : true,
        component : ProgressPage
    },
    {
        path : '/modals',
        auth : true,
        exact : true,
        component : ModalPage
    },
    {
        path : '/forms',
        auth : true,
        exact : true,
        component : FormPage
    },
    {
        path : '/input-groups',
        auth : true,
        exact : true,
        component : InputGroupPage
    },
    {
        path : '/charts',
        auth : true,
        exact : true,
        component : ChartPage
    }
]

export default routes;