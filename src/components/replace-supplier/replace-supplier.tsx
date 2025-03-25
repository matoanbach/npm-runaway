import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { ResponsiveTableComponent } from "../responsive-table/responsive-table"
import { CertificateData } from "../pdf-generator.tsx/pdf-generator"

export type ReplaceSupplierProps = {
    alternative_suppliers: CertificateData[];
}

export function ReplaceSupplierComponent({ alternative_suppliers }: ReplaceSupplierProps) {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant="outline">Replace</Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="w-[90vw] max-w-none">
                {/* <ResponsiveTableComponent certificates={alternative_suppliers} /> */}
                <AlertDialogHeader>
                    <AlertDialogTitle>Pick one supplier</AlertDialogTitle>
                    <AlertDialogDescription>
                        <ResponsiveTableComponent certificates={alternative_suppliers} replaceActive={true} />
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
