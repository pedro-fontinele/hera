export abstract class BreadcrumbNewOrEdit {
    public static breadcrumbNewOrEdit(urlCurrent: string): boolean {
        return urlCurrent.includes('new') ? true : urlCurrent.includes('edit') ? false : false;
    }
}