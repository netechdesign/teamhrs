
let RoleUser= {
    id: 'RoleUser',
    title: 'Role & User',
    type: 'collapse',
    icon: 'feather icon-menu',
    children: [
        {
            id: 'Role',
            title: 'Role',
            type: 'item',
            url: '/role',
           
        },
        {
            id: 'v-fixed',
            title: 'User',
            type: 'item',
            url: '/user',
           
        }
    ]}
;
let employeeForm={
    id: 'EmployeeForms',
    title: 'Employee Form',
    type: 'collapse',
    icon: 'feather icon-menu',
    children: [
        {
            id: 'employee_details',
            title: 'Employee details',
            type: 'item',
            url: '/services-starter/Employee-Details',
           
        },
        {
            id: 'v-fixed',
            title: 'User',
            type: 'item',
            url: '/user',
           
        }
    ]
};



export default {
    items: [
        
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    classes: 'nav-item',
                    url: '/dashboard',
                    icon: 'feather icon-home'
                },
                RoleUser,employeeForm,{
                    id: 'applications',
                    title: 'Application',
                    type: 'item',
                    url: '/applications',
                    icon: 'feather icon-edit'
                }
                ] 
}