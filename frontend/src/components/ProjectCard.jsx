import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { 
  Eye, 
  Sprout, 
  Activity, 
  Users, 
  Microscope, 
  TrendingUp,
  Award,
  Trophy,
  Target
} from "lucide-react";

const projectIcons = {
  "FeedEyes": Eye,
  "Crop Recommendation System": Sprout,
  "Crop Monitoring System": Activity,
  "Customer Churn Prediction": Users,
  "Malaria Parasite Detector": Microscope,
  "Bank Customer Transaction Dashboard": TrendingUp,
  "2023 Cohere Multilingual Hackathon Winner": Trophy,
  "Climate Risk Challenge Winner": Award,
  "Legacy AgriTech Hackathon Finalist": Target,
};

 function ProjectCard({ title, description, actions = [] }) {
    const Icon = projectIcons[title] || Eye;
    
    return (
        <Card className="w-full hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-sky-300 group">
            <CardHeader className="pb-4">
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <CardTitle className="text-xl font-semibold tracking-tight text-gray-900 group-hover:text-sky-600 transition-colors">
                            {title}
                        </CardTitle>
                    </div>
                </div>

                {description && (
                    <CardDescription className="mt-3 text-sm text-gray-600 leading-relaxed">
                        {description}
                    </CardDescription>
                )}

                <div className="mt-4 h-px bg-gradient-to-r from-sky-200 via-sky-300 to-transparent"></div>
            </CardHeader>

        <CardFooter className="flex justify-start flex-wrap gap-2 pt-2">
            {actions.map((act, i) => (
            <Button
                key={i}
                variant={act.variant ?? "default"}
                onClick={act.onClick}
                size={act.size ?? "sm"}
                className={act.variant === "ghost" ? "text-xs font-medium text-gray-600 hover:text-sky-600 hover:bg-sky-50" : "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-sm"}
            >
                {act.label}
            </Button>
            ))}
        </CardFooter>
        </Card>
    );
    }

export default ProjectCard;