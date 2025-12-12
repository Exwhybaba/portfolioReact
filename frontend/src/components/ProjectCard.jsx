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
  Target,
  ExternalLink,
  Code2
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
    const Icon = projectIcons[title] || Code2;
    
    return (
        <Card className="w-full overflow-hidden bg-white border-slate-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-50 to-sky-50 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <CardHeader className="pb-4 relative z-10">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                        <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                        <CardTitle className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                            {title}
                        </CardTitle>
                    </div>
                </div>

                {description && (
                    <CardDescription className="mt-4 text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {description}
                    </CardDescription>
                )}
            </CardHeader>

        <CardFooter className="flex justify-start flex-wrap gap-2 pt-4 relative z-10 border-t border-slate-100 bg-gradient-to-b from-white to-slate-50/30">
            {actions.map((act, i) => (
            <Button
                key={i}
                variant={act.variant ?? "default"}
                onClick={act.onClick}
                size={act.size ?? "sm"}
                className={act.variant === "ghost" 
                  ? "text-xs font-medium text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300" 
                  : "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-md hover:shadow-lg flex items-center gap-2"
                }
            >
                {act.label}
                {act.label === "View Project" && <ExternalLink className="w-3 h-3" />}
            </Button>
            ))}
        </CardFooter>
        </Card>
    );
    }

export default ProjectCard;