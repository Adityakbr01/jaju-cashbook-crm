import { useQuery } from "@tanstack/react-query";
import { fetchDaybookDates } from "../api/home";
import { useToast } from "@/hooks/use-toast";

export const useDaybookDates = () => {
  const { toast } = useToast();

  return useQuery({
    queryKey: ["daybookDates"],
    queryFn: async () => {
      try {
        const response = await fetchDaybookDates();
        return response?.data?.received_date.map((item) => item.received_date);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to fetch dates",
          variant: "destructive",
        });
        return [];
      }
    },
  });
};
